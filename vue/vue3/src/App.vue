<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'
import {
  generateActivitySelectOptions,
  generateTimelineItems,
  normalizeHashPage
} from './functions'

const currentPage = ref(normalizeHashPage())

const timelineItems = generateTimelineItems()

const activities = ref(['Coding', 'Reading', 'Training'])

const activitySelectOptions = generateActivitySelectOptions(activities.value)

function goTo(page) {
  currentPage.value = page
}

function createActivity(activity) {
  activities.value.push(activity)
}

function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}
</script>

<template>
  <TheHeader @navigate="goTo($event)" />

  <main class="flex grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @delete-activity="deleteActivity"
      @create-activity="createActivity"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
