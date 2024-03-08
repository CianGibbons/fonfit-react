import { isFiniteNumber } from './number';
import { isString } from './string';

/**
 * Determines if the specified value is a valid number enum value.
 * NOTE Dont forget that a number enums are generated as follows:
 *    { '1': 'Deliverable', '2': 'Task', Deliverable: 1, Task: 2 }
 * @param value
 * @returns
 */
export function isValidNumberEnumValue<T>(value: unknown, enumType: { [key: string]: T }): value is T {
  if (!isFiniteNumber(value)) {
    return false;
  }

  return Object.values(enumType).includes(<T>value);
}

/**
 * Determines if the specified value is a valid string enum value
 * NOTE Dont forget that a string enums are generated as follows and are different from number enums:
 *    { Deliverable: '1', Task: '2' }
 * @param value
 * @returns
 */
export function isValidStringEnumValue<T>(value: unknown, enumType: { [key: string]: T }): value is T {
  if (!isString(value)) {
    return false;
  }

  return Object.values(enumType).includes(<T>value);
}

/**
 * Checks if value is a valid number enum value of number enum type T and equals the specified enumValue
 * @param value
 * @param enumType
 * @param enumValue
 * @returns
 */
export function areNumberEnumValuesEqual<T>(value: number, enumType: { [key: string]: T }, enumValue: number): boolean {
  return isValidNumberEnumValue(value, enumType) && value === enumValue;
}

/**
 * Checks if value is a valid string enum value of string enum type T and equals the specified enumValue
 * @param value
 * @param enumType
 * @param enumValue
 * @returns
 */
export function areStringEnumValuesEqual<T>(value: string, enumType: { [key: string]: T }, enumValue: string): boolean {
  return isValidStringEnumValue(value, enumType) && value === enumValue;
}
