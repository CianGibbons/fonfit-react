import { isNotNullOrUndefined } from './common';

/**
 * Type guard that checks if value is a Date.
 * NOTE - maybe it is isValidDate you want??????
 * @param value
 * @returns
 */
export function isDate(value: unknown): value is Date {
  return isNotNullOrUndefined(value) && Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * Type guard that checks if value is a valid Date - ie that the Date.getTime returns a finite number
 * @param date
 * @returns
 */
export function isValidDate(value: unknown): value is Date {
  return isDate(value) && !isNaN(value.getTime());
}
