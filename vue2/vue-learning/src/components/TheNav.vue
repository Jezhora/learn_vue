<script setup>
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from '../constants'
import NavItem from './NavItem.vue'

defineProps(['currentPage'])

const emit = defineEmits(['navigate'])

const navItems = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
}
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex justify-around items-center border-t">
      <NavItem
        v-for="(icon, page) in navItems"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': page === currentPage }"
        @click="emit('navigate', page)"
      >
        <component :is="icon" class="w-6 h-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
