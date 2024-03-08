import { isNotNullOrUndefined } from './common';

/**
 * Type guard that checks if value is a string
 * @param value
 * @returns
 */
export function isString(value: unknown): value is string {
  return isNotNullOrUndefined(value) && Object.prototype.toString.call(value) === '[object String]';
}

/**
 * Type guard that checks if value is a string and is not empty (zero length)
 * @param value
 * @returns
 */
export function isNotEmptyString(value: unknown): value is string {
  return isString(value) && value.length !== 0;
}
