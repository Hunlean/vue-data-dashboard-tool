<template>
  <div class="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
    <div v-if="icon" class="flex-shrink-0">
      <!-- Placeholder for an icon, e.g., using an SVG or an icon font -->
      <span class="text-3xl text-blue-500">{{ icon }}</span>
    </div>
    <div>
      <h3 class="text-sm font-medium text-gray-500">{{ title }}</h3>
      <p class="text-2xl font-bold text-gray-900 mt-1">{{ value }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  icon: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
/* No specific styles needed with Tailwind */
</style>
