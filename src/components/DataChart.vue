<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps({
  filteredData: Array
});

const chartCanvas = ref(null);
let chartInstance = null;


const getColor = (status) => {
  switch (status) {
    case 'Completed': return '#10b981';
    case 'Pending': return '#f59e0b';
    case 'Error': return '#f43f5e';
    default: return '#9ca3af';
  }
};


const chartInsights = computed(() => {
  if (!props.filteredData.length) return { max: 0, total: 0, avg: 0 };

  const values = props.filteredData.map(item => item.valueUSD);
  const total = values.reduce((a, b) => a + b, 0);
  const max = Math.max(...values);
  const avg = total / values.length;

  return {
    max: max.toLocaleString(),
    total: total.toLocaleString(),
    avg: Math.round(avg).toLocaleString()
  };
});


const chartData = computed(() => {
  return {
    labels: props.filteredData.map(item => item.referenceID),
    datasets: [{
      label: 'Value',
      data: props.filteredData.map(item => item.valueUSD),
      backgroundColor: props.filteredData.map(item => getColor(item.status)),
      borderRadius: 4,
      barThickness: 16,
      maxBarThickness: 30
    }]
  };
});


const initChart = () => {
  if (chartCanvas.value) {
    chartInstance = new Chart(chartCanvas.value, {
      type: 'bar',
      data: chartData.value,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1f2937',
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              label: (context) => ` $${context.raw.toLocaleString()}`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: '#f3f4f6' },
            ticks: {
              callback: (value) => '$' + value / 1000 + 'k',
              font: { size: 10 }
            },
            border: { display: false }
          },
          x: {
            grid: { display: false },
            ticks: { display: false }
          }
        }
      }
    });
  }
};

watch(() => props.filteredData, () => {
  if (chartInstance) {
    chartInstance.data = chartData.value;
    chartInstance.update();
  }
}, { deep: true });

onMounted(() => {
  initChart();
});
</script>

<template>
  <div class="card bg-white shadow-sm border border-gray-200 h-full rounded-xl overflow-hidden flex flex-col">
    
    <div class="p-6 pb-2 flex justify-between items-start">
      <div>
        <h3 class="font-bold text-gray-800 text-lg">Analytics</h3>
        <p class="text-xs text-gray-500">Visual breakdown of shipment values</p>
      </div>
      
      <div class="flex gap-3 text-xs font-medium text-gray-500">
        <div class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> Done</div>
        <div class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-amber-500"></span> Pending</div>
        <div class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-rose-500"></span> Error</div>
      </div>
    </div>

    <div class="relative h-56 w-full px-4">
      <canvas ref="chartCanvas"></canvas>
    </div>

    <div class="mt-auto bg-gray-50 border-t border-gray-100 p-4 grid grid-cols-3 gap-4 text-center divide-x divide-gray-200">
      
      <div>
        <p class="text-[10px] uppercase tracking-wide text-gray-400 font-bold">Highest</p>
        <p class="text-gray-700 font-mono font-bold text-sm">${{ chartInsights.max }}</p>
      </div>

      <div>
        <p class="text-[10px] uppercase tracking-wide text-gray-400 font-bold">Total Volume</p>
        <p class="text-blue-600 font-mono font-bold text-sm">${{ chartInsights.total }}</p>
      </div>

      <div>
        <p class="text-[10px] uppercase tracking-wide text-gray-400 font-bold">Average</p>
        <p class="text-gray-700 font-mono font-bold text-sm">${{ chartInsights.avg }}</p>
      </div>

    </div>

  </div>
</template>