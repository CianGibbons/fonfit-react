import { isNotNullOrUndefined } from './common';

/**
 * Type guard that checks if value is a boolean
 * @param value
 * @returns
 */
export function isBoolean(value: unknown): value is boolean {
  return isNotNullOrUndefined(value) && Object.prototype.toString.call(value) === '[object Boolean]';
}
