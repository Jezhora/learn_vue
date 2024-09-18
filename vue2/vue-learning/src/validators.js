import { HOURS_IN_DAY, MIDNIGHT_OUR, NAV_ITEMS } from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid({ hour }) {
  return typeof hour === 'number' && hour >= MIDNIGHT_OUR && hour < HOURS_IN_DAY
}

export default function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

function isSelectOptionValid({ value, label }) {
  return typeof value === 'number' && typeof label === 'string'
}

export function validateTimeLineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}
