<template>
  <div class="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Detailed Shipment Records</h2>
    
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference ID</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value (USD)</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Processing Time (Hours)</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-if="filteredData.length === 0">
          <td colspan="7" class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
            No shipments found matching your criteria.
          </td>
        </tr>
        <tr v-for="record in filteredData" :key="record.id" class="hover:bg-gray-50">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ record.id }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ record.referenceID }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ record.date }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm" :class="{
            'text-green-600': record.status === 'Completed',
            'text-yellow-600': record.status === 'Pending',
            'text-red-600': record.status === 'Error',
          }">{{ record.status }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${{ record.valueUSD.toFixed(2) }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ record.processingTimeHours }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ record.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  filteredData: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* No specific styles needed for Tailwind */
</style>
