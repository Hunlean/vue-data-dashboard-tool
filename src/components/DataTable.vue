<script setup>
defineProps({
  filteredData: Array
});

const getStatusBadge = (status) => {
  switch (status) {
    case 'Completed': return 'badge bg-emerald-500 text-white border-none shadow-sm gap-1';
    case 'Pending': return 'badge bg-amber-500 text-white border-none shadow-sm gap-1';
    case 'Error': return 'badge bg-rose-500 text-white border-none shadow-sm gap-1';
    default: return 'badge badge-ghost';
  }
};
</script>

<template>
  <div class="card bg-white shadow-sm border border-gray-200 flex flex-col rounded-xl h-full">
    
    <div class="px-6 py-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
      <div>
        <h3 class="font-bold text-gray-800 text-lg">Shipment Manifest</h3>
        <p class="text-xs text-gray-500 mt-1">Real-time tracking of import/export data</p>
      </div>
      <div class="badge badge-neutral badge-outline">Total: {{ filteredData.length }}</div>
    </div>

    <div class="overflow-x-auto overflow-y-auto w-full flex-grow">
      <table class="table w-full">
        <thead class="bg-gray-50 text-gray-500 font-bold uppercase text-xs tracking-wider border-b border-gray-200">
          <tr>
            <th class="py-4 pl-6 text-left w-16">Type</th>
            <th class="py-4 px-4 text-left min-w-[160px]">Reference ID</th>
            <th class="py-4 px-4 text-left min-w-[110px]">Date</th>
            <th class="py-4 px-4 text-left min-w-[110px]">Status</th>
            <th class="py-4 px-4 text-right min-w-[140px]">Value (USD)</th>
            <th class="py-4 px-8 text-left min-w-[220px]">Description</th>
            <th class="py-4 pr-6 text-left min-w-[120px]">Proc. Time</th>
          </tr>
        </thead>
        
        <tbody class="text-gray-600 text-sm divide-y divide-gray-100">
          <tr v-for="item in filteredData" :key="item.id" class="hover:bg-blue-50/40 transition-colors">
            
            <td class="py-4 pl-6 align-middle">
              <div class="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm border border-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
            </td>

            <td class="py-4 px-4 align-middle">
              <div class="font-bold text-gray-800">{{ item.referenceID }}</div>
            </td>

            <td class="py-4 px-4 align-middle">
              <div class="font-mono text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded w-fit">
                {{ item.date }}
              </div>
            </td>

            <td class="py-4 px-4 align-middle">
              <span :class="getStatusBadge(item.status)" class="px-3 py-1 font-medium">
                {{ item.status }}
              </span>
            </td>

            <td class="py-4 px-4 align-middle text-right">
              <span class="font-mono font-bold text-gray-700 tracking-tight">
                ${{ item.valueUSD.toLocaleString() }}
              </span>
            </td>

            <td class="py-4 px-8 align-middle">
              <span class="text-gray-700 font-medium block truncate max-w-[200px]" :title="item.description">
                {{ item.description }}
              </span>
            </td>

            <td class="py-4 pr-6 align-middle">
              <div class="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-gray-400">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" />
                </svg>
                {{ item.processingTimeHours }}h
              </div>
            </td>

          </tr>
        </tbody>
      </table>
      
      <div v-if="filteredData.length === 0" class="flex flex-col items-center justify-center p-12 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mb-2 opacity-50">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <p>No shipments found.</p>
      </div>

    </div>
  </div>
</template>