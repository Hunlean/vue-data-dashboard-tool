<template>
  <div class="flex flex-col sm:flex-row gap-4 mb-6">
    <div class="flex-1">
      <label for="search" class="block text-sm font-medium text-gray-700">Search Reference ID or Description</label>
      <input
        type="text"
        id="search"
        :value="searchQuery"
        @input="$emit('update:searchQuery', $event.target.value)"
        placeholder="e.g., SHIP-KH-2025-0001, electronics"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>

    <div class="flex-none w-full sm:w-48">
      <label for="status-filter" class="block text-sm font-medium text-gray-700">Filter by Status</label>
      <select
        id="status-filter"
        :value="status"
        @change="$emit('update:status', $event.target.value)"
        class="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="All">All Statuses</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="Error">Error</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  filters: {
    type: Object,
    required: true,
    // Expects { searchQuery: String, status: String }
  }
});

const emit = defineEmits(['update:searchQuery', 'update:status']);

// Using computed properties with get/set for v-model compatibility
const searchQuery = computed({
  get: () => props.filters.searchQuery,
  set: (value) => emit('update:searchQuery', value)
});

const status = computed({
  get: () => props.filters.status,
  set: (value) => emit('update:status', value)
});
</script>

<style scoped>
/* No specific styles needed for Tailwind */
</style>
