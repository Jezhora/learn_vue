<script setup>
import { isTimelineItemValid, validateSelectOptions } from '@/validators'
import BaseSelect from './BaseSelect.vue'
import { ref } from 'vue'
import TimelineHour from './TimelineHour.vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})

const selectActivityId = ref(0)
</script>

<template>
  <li class="relative py-10 px-4 flex flex-col gap-2 border-t border-gray-200">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :selected="selectActivityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="selectActivityId = $event"
    />
  </li>
</template>
