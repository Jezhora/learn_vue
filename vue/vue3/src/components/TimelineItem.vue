<script setup>
import { isTimelineItemValid } from '@/validators'
import BaseSelect from './BaseSelect.vue'
import { ref } from 'vue'
import TimelineHour from './TimelineHour.vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' }
]

const selectActivityId = ref(1)
</script>

<template>
  <li class="relative py-10 px-4 flex flex-col gap-2 border-t border-gray-200">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :selected="selectActivityId"
      :options="options"
      placeholder="Rest"
      @select="selectActivityId = $event"
    />
  </li>
</template>
