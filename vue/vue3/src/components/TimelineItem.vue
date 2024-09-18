<script setup>
import { isTimelineItemValid } from '@/validators'
import BaseSelect from './BaseSelect.vue'
import { ref } from 'vue'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const hourLinkClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 px-2 rounded font-mono text-lg',
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'text-gray-500 bg-gray-100'
]

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' }
]

const selectActivityId = ref(1)
</script>

<template>
  <li class="relative py-10 px-4 flex flex-col gap-2 border-t border-gray-200">
    <a href="#" :class="hourLinkClasses"> {{ timelineItem.hour }}:00 </a>
    <BaseSelect
      :selected="selectActivityId"
      :options="options"
      placeholder="Rest"
      @select="selectActivityId = $event"
    />
  </li>
</template>
