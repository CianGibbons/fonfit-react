import { isNotNullOrUndefined } from './common';

/**
 * Type guard that checks if value is an object
 * @param value
 * @returns
 */
export function isObject(value: unknown): value is object {
  return isNotNullOrUndefined(value) && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Type guard that checks if value is an object of the specified type
 * @param value
 * @param type
 * @returns
 */
export function isOfType<T extends object>(value: unknown, type: { new (...args: any[]): T }): value is T {
  return isObject(value) && value instanceof type;
}
