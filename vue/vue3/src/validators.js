import { BUTTON_TYPES, HOURS_IN_DAY, MIDNIGHT_OUR, NAV_ITEMS } from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_OUR, HOURS_IN_DAY - 1)
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

function isSelectOptionValid({ value, label }) {
  return isNumber(value) && isNotEmptyString(label)
}

export function validateTimeLineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}

export function isUndefinedOrNull(value) {
  return isUndefinded(value) || isNull(value)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

export function isUndefinded(value) {
  return value === undefined
}

function isNull(value) {
  return value === null
}

function isNumber(value) {
  return typeof value === 'number'
}

function isString(value) {
  return typeof value === 'string'
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

export function isActivityValid(activity) {
  return isNotEmptyString(activity)
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}
