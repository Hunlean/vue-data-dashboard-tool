<script setup>
import { onMounted } from 'vue';
import { useAnalyticsData } from '@/composables/useAnalyticsData';
import DataTable from '@/components/DataTable.vue';

const { fetchData, filteredData, resetFilters } = useAnalyticsData();

onMounted(() => {
  resetFilters();
  fetchData();
});
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Detailed Reports</h1>
    <div class="bg-white rounded-lg p-6 shadow-md h-[calc(100vh-12rem)] overflow-y-auto">
      <DataTable :filteredData="filteredData" />
    </div>
  </div>
</template>

<style scoped>
</style>
