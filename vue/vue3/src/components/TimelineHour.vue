<script setup>
import { isHourValid } from '@/validators'

const props = defineProps({
  hour: {
    required: true,
    type: Number,
    validator: isHourValid
  }
})

const classes = [
  'absolute -top-4 left-1/2 -translate-x-1/2 px-2 rounded font-mono text-lg',
  props.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'text-gray-500 bg-gray-100'
]

const formattedHour = `${props.hour.toString().padStart(2, 0)} :00`
</script>
<template>
  <a href="#" :class="classes"> {{ formattedHour }}</a>
</template>
