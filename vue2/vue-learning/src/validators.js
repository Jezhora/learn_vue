import { HOURS_IN_DAY, MIDNIGHT_OUR, NAV_ITEMS } from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid({ hour }) {
  return typeof hour === 'number' && hour >= MIDNIGHT_OUR && hour < HOURS_IN_DAY
}
