import { isBoolean } from './boolean';
import { isNotNullOrUndefined } from './common';
import { isDate, isValidDate } from './date';
import { isFiniteNumber, isNumber, isSafeInteger } from './number';
import { isObject, isOfType } from './object';
import { isNotEmptyString, isString } from './string';

/**
 * Type guard that checks if value is an array
 * @param value
 * @returns
 */
export function isArray(value: unknown): value is [] {
  return isNotNullOrUndefined(value) && typeof value === 'object' && Array.isArray(value);
}

/**
 * Type guard that checks if value is an array with at least one item and each item is a string
 * @param value
 * @returns
 */
export function isArrayOfStrings(value: unknown): value is string[] {
  return isArray(value) && value.length !== 0 && value.every(isString);
}

/**
 * Type guard that checks if value is an array with at least one item and each item is not an empty string
 * @param value
 * @returns
 */
export function isArrayOfNotEmptyStrings(value: unknown): value is string[] {
  return isArray(value) && value.length !== 0 && value.every(isNotEmptyString);
}

/**
 * Type guard that checks if value is an array with at least one item and each item is an object
 * @param value
 * @returns
 */
export function isArrayOfObjects(value: unknown): value is object[] {
  return isArray(value) && value.length !== 0 && value.every(isObject);
}

/**
 * Type guard that checks if value is an array with at least one item and each item is an instance of T
 * @param value
 * @returns
 */
export function isArrayOfType<T extends object>(value: unknown, type: { new (...args: any[]): T }): value is T[] {
  return isArray(value) && value.length !== 0 && value.every((item) => isOfType(item, type));
}

/**
 * Type guard that checks if value is an array with at least one item and each item is a number
 * NOTE - maybe it is isArrayOfFiniteNumbers you want??????
 * @param value
 * @returns
 */
export function isArrayOfNumbers(value: unknown): value is number[] {
  return isArray(value) && value.length !== 0 && value.every(isNumber);
}

/**
 * Type guard that checks if value is an array with at least one item and each item is a finite number
 * @param value
 * @returns
 */
export function isArrayOfFiniteNumbers(value: unknown): value is number[] {
  return isArray(value) && value.length !== 0 && value.every(isFiniteNumber);
}

/**
 * Type guard that checks if value is an array with at least one item and each item is a safe integer
 * @param value
 * @returns
 */
export function isArrayOfSafeIntegers(value: unknown): value is number[] {
  return isArray(value) && value.length !== 0 && value.every(isSafeInteger);
}

/**
 * Type guard that checks if value is an array with at least one item and each item is an boolean
 * @param value
 * @returns
 */
export function isArrayOfBooleans(value: unknown): value is boolean[] {
  return isArray(value) && value.length !== 0 && value.every(isBoolean);
}

/**
 * Type guard that checks if value is an array with at least one item and each item is a Date instance
 * NOTE - maybe it is isArrayOfValidDates you want??????
 * @param value
 * @returns
 */
export function isArrayOfDates(value: unknown): value is Date[] {
  return isArray(value) && value.length !== 0 && value.every(isDate);
}

/**
 * Type guard that checks if value is an array with at least one item and each item is a valid Date instance
 * @param value
 * @returns
 */
export function isArrayOfValidDates(value: unknown): value is Date[] {
  return isArray(value) && value.length !== 0 && value.every(isValidDate);
}

/**
 * Removes all the elements that match the conditions defined by the specified predicate.
 * @param array The array to process
 * @param predicate The callback that defines the conditions of the elements to remove.
 * @returns The number of elements removed from the array
 */
export function removeAllMatches<T>(array: T[], predicate: (value: T, index: number, array: T[]) => boolean): number {
  let removed = 0;

  // remove in reverse.
  for (let index = array.length - 1; index >= 0; index--) {
    if (predicate(array[index], index, array)) {
      array.splice(index, 1);
      removed++;
    }
  }

  return removed;
}
