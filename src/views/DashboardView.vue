<script setup>
import { onMounted } from 'vue';
import { useAnalyticsData } from '@/composables/useAnalyticsData';

import FilterControls from '@/components/FilterControls.vue';
import StatCardGrid from '@/components/dashboard/StatCardGrid.vue';
import DataChart from '@/components/DataChart.vue';
import DataTable from '@/components/DataTable.vue';

const {
  isLoading,
  error,
  fetchData,
  filteredData,
  metrics,
  filters
} = useAnalyticsData();

onMounted(() => {
  fetchData();
});

const updateSearchQuery = (query) => {
  filters.searchQuery = query;
};

const updateStatus = (status) => {
  filters.status = status;
};
</script>

<template>
  <div>
    
    <div v-if="isLoading" class="flex flex-col items-center justify-center h-[calc(100vh-10rem)]">
      <span class="loading loading-spinner loading-lg text-primary"></span>
      <p class="mt-4 text-gray-500 font-medium animate-pulse">Loading dashboard data...</p>
    </div>

    <div v-else-if="error" class="flex flex-col items-center justify-center h-[calc(100vh-10rem)]">
      <div role="alert" class="alert alert-error max-w-md shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <div>
          <h3 class="font-bold">Error loading data</h3>
          <div class="text-xs">
            {{ error }}
          </div>
          </div>
            <button class="btn btn-sm btn-outline btn-neutral bg-white" @click="fetchData">Retry</button>
          </div>
        </div>

    <div v-else class="flex flex-col gap-8 fade-in">
      
      <StatCardGrid />

      <FilterControls 
        :filters="filters"
        @update:searchQuery="updateSearchQuery"
        @update:status="updateStatus"
      />

      <div class="grid grid-cols-1 xl:grid-cols-5 gap-8">
        
        <div class="xl:col-span-3">
          <div class="bg-white rounded-lg p-6 shadow-md flex-grow min-h-[400px] max-h-[600px] overflow-y-auto">
            <DataChart :filteredData="filteredData" />
          </div>
        </div>

        <div class="xl:col-span-2">
          <div class="bg-white rounded-lg p-6 shadow-md flex-grow min-h-[400px] max-h-[600px] overflow-y-auto">
            <DataTable :filteredData="filteredData" />
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>