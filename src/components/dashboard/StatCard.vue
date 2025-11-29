<template>
  <div class="stat-card bg-base-100 p-6 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl border border-neutral-200/60">
    <div class="flex items-center space-x-4">
      <div v-if="icon" class="flex-shrink-0">
        <div :class="`bg-${color}-100`" class="w-16 h-16 rounded-full flex items-center justify-center">
          <span :class="`text-${color}-500`" class="text-4xl">{{ icon }}</span>
        </div>
      </div>
      <div class="flex-1">
        <h3 class="text-lg font-semibold text-neutral-500">{{ title }}</h3>
        <p class="text-4xl font-extrabold text-neutral-800 mt-1">{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  icon: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'primary',
  }
});
</script>
