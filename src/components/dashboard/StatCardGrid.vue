<template>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    <StatCard title="Total Shipments" :value="metrics.totalShipments" icon="📦" />
    <StatCard title="Average Value (USD)" :value="`$${metrics.averageValue.toFixed(2)}`" icon="💲" />
    <StatCard title="Error Rate (%)" :value="`${metrics.errorRate.toFixed(2)}%`" icon="⚠️" />
  </div>
</template>

<script setup>
import { useAnalyticsData } from '../../composables/useAnalyticsData';
import StatCard from './StatCard.vue';

const { metrics } = useAnalyticsData();
</script>

<style scoped>
/* No specific styles needed with Tailwind */
</style>
