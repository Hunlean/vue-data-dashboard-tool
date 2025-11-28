<template>
  <div class="bg-white p-6 rounded-lg shadow-md h-full">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Shipments by Status</h2>
    <div class="relative h-64 md:h-80">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watchEffect } from 'vue';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const props = defineProps({
  filteredData: {
    type: Array,
    required: true,
  },
});

const chartCanvas = ref(null);
let chartInstance = null; // Use a mutable variable to store the chart instance

onMounted(() => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext('2d');
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Number of Shipments',
          data: [],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)', // Completed
            'rgba(255, 206, 86, 0.6)', // Pending
            'rgba(255, 99, 132, 0.6)', // Error
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: false,
            text: 'Shipments by Status'
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0, // Ensure integer ticks for count
            },
          },
        },
      },
    });
  }
});

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy();
  }
});

watchEffect(() => {
  if (chartInstance && props.filteredData) {
    // Process data for the chart
    const statusCounts = props.filteredData.reduce((acc, record) => {
      acc[record.status] = (acc[record.status] || 0) + 1;
      return acc;
    }, {});

    const labels = ['Completed', 'Pending', 'Error'];
    const data = labels.map(status => statusCounts[status] || 0);

    chartInstance.data.labels = labels;
    chartInstance.data.datasets[0].data = data;
    chartInstance.update();
  }
});
</script>

<style scoped>
/* No specific styles needed for Tailwind */
</style>
