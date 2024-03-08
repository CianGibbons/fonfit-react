import { isNotNullOrUndefined } from './common';

/**
 * Type guard that checks if value is a number.
 * NOTE - maybe it is isFiniteNumber you want??????
 * @param value
 * @returns
 */
export function isNumber(value: unknown): value is number {
  return isNotNullOrUndefined(value) && Object.prototype.toString.call(value) === '[object Number]';
}

/**
 * Type guard that checks if value is a valid finite number
 * @param value
 * @returns
 */
export function isFiniteNumber(value: unknown): value is number {
  return isNumber(value) && Number.isFinite(value);
}

/**
 * Type guard that checks if value is a safe integer.
 * @param value
 * @returns
 */
export function isSafeInteger(value: unknown): value is number {
  return isNumber(value) && Number.isSafeInteger(value);
}
