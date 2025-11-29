<script setup>
import { onMounted } from 'vue';
import DataChart from '@/components/DataChart.vue';
import { useAnalyticsData } from '@/composables/useAnalyticsData';

const { fetchData, filteredData, resetFilters } = useAnalyticsData();

onMounted(() => {
  resetFilters();
  fetchData();
});
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Visual Analytics</h1>
    
    <div class="bg-white rounded-lg p-6 shadow-md mb-8 h-96">
      <DataChart :filteredData="filteredData" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white rounded-lg p-6 shadow-md flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-gray-500">Data Source</p>
          <p class="text-lg font-bold text-gray-800">Mock API</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
      </div>
      <div class="bg-white rounded-lg p-6 shadow-md flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-gray-500">Last Update</p>
          <p class="text-lg font-bold text-gray-800">Just Now</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
