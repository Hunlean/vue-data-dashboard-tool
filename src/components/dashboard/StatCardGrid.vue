<script setup>
import { useAnalyticsData } from '@/composables/useAnalyticsData';

const { metrics } = useAnalyticsData();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    
    <!-- Total Shipments Card -->
    <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center h-full">
      <div class="text-primary mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-10 h-10 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
      </div>
      <div class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Total Shipments</div>
      <div class="text-4xl font-bold text-gray-800 mb-2">{{ metrics.totalShipments }}</div>
      <div class="text-xs text-gray-400">Jan 1st - Feb 1st</div>
    </div>

    <!-- Avg Value Card -->
    <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center h-full">
      <div class="text-secondary mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-10 h-10 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <div class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Avg Value</div>
      <div class="text-4xl font-bold text-gray-800 mb-2">${{ metrics.averageValueUSD }}</div>
      <div class="text-xs text-success flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
        22%
      </div>
    </div>

    <!-- Error Rate Card -->
    <div class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center h-full">
      <div class="text-error mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-10 h-10 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
      </div>
      <div class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Error Rate</div>
      <div class="text-4xl font-bold text-gray-800 mb-2">{{ metrics.errorRate }}</div>
      <div class="text-xs text-error flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        Requires attention
      </div>
    </div>

  </div>
</template>