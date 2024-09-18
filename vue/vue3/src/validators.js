import { HOURS_IN_DAY, MIDNIGHT_OUR, NAV_ITEMS } from './constants'

export function isPageValid(page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

function isSelectOptionValid({ value, label }) {
  return isNumber(value) && isString(label)
}

export function validateTimeLineItems(timelineItems) {
  return timelineItems.every(isTimelineItemValid)
}

export function isUndefinedOrNull(value) {
  return isUndefind(value) || isNull(value)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

function isUndefind(value) {
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

function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_OUR, HOURS_IN_DAY - 1)
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}
