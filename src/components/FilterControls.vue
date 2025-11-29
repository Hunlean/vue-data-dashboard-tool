<template>
  <div class="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 p-6 bg-base-100 rounded-2xl shadow-lg border border-neutral-200/60">
    <div class="w-full">
      <h2 class="text-xl font-bold text-neutral-800 mb-2">Filter & Search</h2>
      <p class="text-neutral-500">Refine your view of the shipment data.</p>
    </div>
    <div class="flex flex-col sm:flex-row gap-4 w-full">
      <div class="flex-1">
        <label for="search" class="block text-sm font-semibold text-neutral-600 mb-1">Search</label>
        <input
          type="text"
          id="search"
          :value="searchQuery"
          @input="$emit('update:searchQuery', $event.target.value)"
          placeholder="e.g., SHIP-KH-2025-0001"
          class="input input-bordered w-full bg-base-200"
        />
      </div>
      <div class="flex-none w-full sm:w-56">
        <label for="status-filter" class="block text-sm font-semibold text-neutral-600 mb-1">Status</label>
        <select
          id="status-filter"
          :value="status"
          @change="$emit('update:status', $event.target.value)"
          class="select select-bordered w-full bg-base-200"
        >
          <option value="All">All Statuses</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Error">Error</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  filters: {
    type: Object,
    required: true,
  }
});

const emit = defineEmits(['update:searchQuery', 'update:status']);

const searchQuery = computed({
  get: () => props.filters.searchQuery,
  set: (value) => emit('update:searchQuery', value)
});

const status = computed({
  get: () => props.filters.status,
  set: (value) => emit('update:status', value)
});
</script>
