import { ref, reactive, computed } from 'vue';
import mockData from '../data/mockData.json';

export function useAnalyticsData() {
  // Reactive state
  const rawData = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const metrics = reactive({
    totalShipments: 0,
    averageValue: 0,
    errorRate: 0,
  });

  const filters = reactive({
    searchQuery: '',
    status: 'All', // 'All', 'Completed', 'Pending', 'Error'
  });

  // Data fetching
  const fetchData = () => {
    isLoading.value = true;
    error.value = null;
    setTimeout(() => {
      try {
        rawData.value = mockData;
        updateMetrics();
      } catch (e) {
        error.value = 'Failed to load data.';
        console.error(e);
      } finally {
        isLoading.value = false;
      }
    }, 500); // Simulate network latency
  };

  // Metrics calculation
  const updateMetrics = () => {
    const data = rawData.value;
    if (!data || data.length === 0) {
      metrics.totalShipments = 0;
      metrics.averageValue = 0;
      metrics.errorRate = 0;
      return;
    }

    metrics.totalShipments = data.length;

    const totalValue = data.reduce((sum, record) => sum + record.valueUSD, 0);
    metrics.averageValue = totalValue / data.length;

    const errorCount = data.filter(r => r.status === 'Error').length;
    metrics.errorRate = (errorCount / data.length) * 100;
  };

  // Filtering logic
  const filteredData = computed(() => {
    let data = rawData.value;

    // Filter by status
    if (filters.status !== 'All') {
      data = data.filter(record => record.status === filters.status);
    }

    // Filter by search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      data = data.filter(record => 
        record.referenceID.toLowerCase().includes(query) ||
        record.description.toLowerCase().includes(query)
      );
    }

    return data;
  });

  // Return composable API
  return {
    rawData,
    isLoading,
    error,
    metrics,
    filters,
    fetchData,
    filteredData,
  };
}
