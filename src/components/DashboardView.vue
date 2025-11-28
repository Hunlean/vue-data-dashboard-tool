<script setup>
import { onMounted } from 'vue';
import { useAnalyticsData } from '../composables/useAnalyticsData';

// Destructure reactive state and functions from the composable
const {
  isLoading,
  error,
  fetchData,
  filteredData, // Will be used by child components
  metrics,      // Will be used by child components
  filters,      // Will be used by child components
} = useAnalyticsData();

// Fetch data when the component is mounted
onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Loading State -->
    <div v-if="isLoading" class="flex-1 flex items-center justify-center">
      <div class="flex flex-col items-center">
        <svg class="animate-spin -ml-1 mr-3 h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="mt-4 text-lg text-gray-700">Loading dashboard data...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex-1 flex items-center justify-center p-4">
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">Error:</strong>
        <span class="block sm:inline">{{ error }}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg @click="fetchData" class="fill-current h-6 w-6 text-red-500 cursor-pointer" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Refresh</title><path d="M14.354 5.646a.5.5 0 00-.708 0L10 9.293 6.354 5.646a.5.5 0 00-.708.708L9.293 10l-3.647 3.646a.5.5 0 00.708.708L10 10.707l3.646 3.647a.5.5 0 00.708-.708L10.707 10l3.647-3.646a.5.5 0 000-.708zM10 2a8 8 0 100 16 8 8 0 000-16zm0 1a7 7 0 110 14 7 7 0 010-14z"/></svg>
        </span>
      </div>
    </div>

    <!-- Data State (Main Dashboard Content) -->
    <div v-else class="flex-1 flex">
      <!-- The Header (placeholder for future component) -->
      <!-- <TheHeader /> -->
      <div class="w-1/6 bg-gray-800 text-white">
        <p class="p-4 text-lg font-semibold">The Sidebar</p>
        <!-- Sidebar content goes here -->
      </div>

      <div class="flex-1 flex flex-col p-6">
        <!-- FilterControls (placeholder for future component) -->
        <div class="mb-6">
          <h2 class="text-2xl font-bold text-gray-800">Filter Controls Placeholder</h2>
          <!-- Filter controls UI will go here -->
          <p>Current Search: {{ filters.searchQuery || 'None' }}</p>
          <p>Current Status: {{ filters.status }}</p>
          <input 
            type="text" 
            v-model="filters.searchQuery" 
            placeholder="Search by ID or description..." 
            class="mt-2 p-2 border rounded-md w-full max-w-sm"
          >
          <select 
            v-model="filters.status" 
            class="mt-2 p-2 border rounded-md w-full max-w-sm"
          >
            <option value="All">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Error">Error</option>
          </select>
        </div>

        <!-- StatCardGrid (placeholder for future component) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white p-4 rounded-lg shadow">
            <h3 class="text-lg font-semibold text-gray-600">Total Shipments</h3>
            <p class="text-3xl font-bold text-gray-900">{{ metrics.totalShipments }}</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow">
            <h3 class="text-lg font-semibold text-gray-600">Average Value (USD)</h3>
            <p class="text-3xl font-bold text-gray-900">${{ metrics.averageValue.toFixed(2) }}</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow">
            <h3 class="text-lg font-semibold text-gray-600">Error Rate (%)</h3>
            <p class="text-3xl font-bold text-gray-900">{{ metrics.errorRate.toFixed(2) }}%</p>
          </div>
        </div>

        <!-- DataChart (placeholder for future component) -->
        <div class="bg-white p-6 rounded-lg shadow mb-6 flex-1">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Data Chart Placeholder</h2>
          <p>Chart will be rendered here.</p>
          <p>Filtered Data Count: {{ filteredData.length }}</p>
        </div>

        <!-- DataTable (placeholder for future component) -->
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Data Table Placeholder</h2>
          <p>Table will display filtered data here.</p>
           <table class="min-w-full divide-y divide-gray-200 mt-4">
            <thead>
              <tr>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference ID</th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value (USD)</th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Processing Time (Hours)</th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="record in filteredData" :key="record.id">
                <td class="px-6 py-4 whitespace-nowrap">{{ record.id }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ record.referenceID }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ record.date }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ record.status }}</td>
                <td class="px-6 py-4 whitespace-nowrap">${{ record.valueUSD.toFixed(2) }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ record.processingTimeHours }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ record.description }}</td>
              </tr>
              <tr v-if="filteredData.length === 0">
                <td colspan="7" class="px-6 py-4 text-center text-gray-500">No data available after filtering.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here if necessary */
</style>
