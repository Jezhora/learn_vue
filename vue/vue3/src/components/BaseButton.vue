<script>
const typeClasses = {
  [BUTTON_TYPE_NEUTRAL]: ' bg-gray-100 p-3 enabled:hover:bg-gray-200',
  [BUTTON_TYPE_DANGER]: ' bg-red-400 p-3 enabled:hover:bg-red-600 text-white',
  [BUTTON_TYPE_PRIMARY]: ' bg-purple-500 p-3 enabled:hover:bg-purple-600 text-white'
}
</script>

<script setup>
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_PRIMARY
} from '@/constants'
import { isButtonTypeValid } from '@/validators'

defineProps({
  type: {
    default: BUTTON_TYPE_PRIMARY,
    type: String,
    validator: isButtonTypeValid
  }
})
</script>

<template>
  <button
    :class="`${typeClasses[type]} rounded disabled:cursor-not-allowed disabled:opacity-50`"
  >
    <slot></slot>
  </button>
</template>
