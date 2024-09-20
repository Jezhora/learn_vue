<script setup>
import TimelineItem from '@/components/TimelineItem.vue'

import { validateSelectOptions, validateTimeLineItems } from '@/validators'
defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimeLineItems
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activity-select-options="activitySelectOptions"
      />
    </ul>
  </div>
</template>
