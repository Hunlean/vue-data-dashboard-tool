<script setup>
import { RouterView } from 'vue-router'
import TheSidebar from '@/components/layout/TheSidebar.vue';
import TheHeader from '@/components/layout/TheHeader.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex font-sans">
    
    <TheSidebar />

    <div class="flex-1 flex flex-col ml-64 transition-all duration-300">
      
      <TheHeader />

      <main class="flex-1 p-8 overflow-y-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>