<script setup>
const props = defineProps(['timelineItem'])

const hourLinkClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 px-2 rounded font-mono text-lg',
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'text-gray-500 bg-gray-100'
]
</script>

<template>
  <li class="relative py-10 px-4 flex flex-col gap-2 border-t border-gray-200">
    <a href="#" :class="hourLinkClasses"> {{ timelineItem.hour }}:00 </a>
  </li>
</template>
