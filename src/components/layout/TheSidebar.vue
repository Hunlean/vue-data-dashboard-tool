<template>
  <aside class="w-64 bg-gray-800 text-white flex flex-col h-screen fixed left-0 top-0 bottom-0 z-50 transition-all duration-300 shadow-xl">
    
    <div class="h-16 flex items-center gap-3 px-6 border-b border-gray-700">
      <div class="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
        <span class="font-bold text-white text-lg">C</span>
      </div>
      <span class="font-bold text-xl tracking-tight text-gray-50">CustomsApp</span>
    </div>

    <nav class="flex-1 overflow-y-auto py-6 px-4">
      <ul class="space-y-2">
        
        <li>
          <router-link to="/" class="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200" :class="{ 'bg-gray-700 text-white': $route.path === '/' }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Dashboard
          </router-link>
        </li>

        <li>
          <router-link to="/reports" class="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200" :class="{ 'bg-gray-700 text-white': $route.path === '/reports' }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Reports
          </router-link>
        </li>

        <li>
          <router-link to="/settings" class="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200" :class="{ 'bg-gray-700 text-white': $route.path === '/settings' }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Settings
          </router-link>
        </li>

        <li>
          <router-link to="/analytics" class="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200" :class="{ 'bg-gray-700 text-white': $route.path === '/analytics' }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
            Analytics
          </router-link>
        </li>

      </ul>
    </nav>

    <div class="p-4 border-t border-gray-700 bg-gray-700/30">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-500">
          <img src="https://ui-avatars.com/api/?name=Kim+Hunlean&background=random" class="w-full h-full object-cover" />
        </div>
        <div>
          <div class="text-sm font-bold text-gray-50">Kim Hunlean</div>
          <div class="text-xs text-gray-400">Admin</div>
        </div>
      </div>
    </div>

  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router';
const $route = useRoute();
</script>

<style scoped>
</style> 