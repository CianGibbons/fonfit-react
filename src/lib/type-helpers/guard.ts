import {
  isArray,
  isArrayOfBooleans,
  isArrayOfFiniteNumbers,
  isArrayOfNotEmptyStrings,
  isArrayOfObjects,
  isArrayOfSafeIntegers,
  isArrayOfStrings,
  isArrayOfType,
  isArrayOfValidDates
} from './helpers/array';
import { isBoolean } from './helpers/boolean';
import { isNotNullOrUndefined, isNotUndefined } from './helpers/common';
import { isValidDate } from './helpers/date';
import { isValidNumberEnumValue, isValidStringEnumValue } from './helpers/enum';
import { isFiniteNumber, isSafeInteger } from './helpers/number';
import { isNotEmptyString, isString } from './helpers/string';

export class Guard {
  /**
   * Asserts that the input value is not null or undefined
   * @param value
   * @returns
   */
  public static isNotNullOrUndefined<T>(value: T | undefined | null, name: string): asserts value is NonNullable<T> {
    if (!isNotNullOrUndefined(value)) {
      throw new Error(`${name} must not be null or undefined`);
    }
  }

  /**
   * Asserts that the input value is not undefined
   * @param value
   * @returns
   */
  public static isNotUndefined<T>(value: T | undefined, name: string): asserts value is T {
    if (!isNotUndefined(value)) {
      throw new Error(`${name} must not be undefined`);
    }
  }

  /**
   * Asserts that the input value must be a string
   * @param value
   * @param name
   * @returns
   */
  public static isString(value: unknown, name: string): asserts value is string {
    if (!isString(value)) {
      throw new Error(`${name} must be string`);
    }
  }

  /**
   * Asserts that the input value must be a non-empty string
   * @param value
   * @param name
   * @returns
   */
  public static isNotEmptyString(value: unknown, name: string): asserts value is string {
    if (!isNotEmptyString(value)) {
      throw new Error(`${name} must not be an empty string`);
    }
  }

  /**
   * Asserts that the input value must be a finite number
   * @param value
   * @param name
   * @returns
   */
  public static isFiniteNumber(value: unknown, name: string): asserts value is number {
    if (!isFiniteNumber(value)) {
      throw new Error(`${name} must be a finite number`);
    }
  }

  /**
   * Asserts that the input value must be a safe integer
   * @param value
   * @param name
   * @returns
   */
  public static isSafeInteger(value: unknown, name: string): asserts value is number {
    if (!isSafeInteger(value)) {
      throw new Error(`${name} must be an integer`);
    }
  }

  /**
   * Asserts that the input value must be in the [min, max] range
   * @param value The value to test
   * @param min The minimum valid value
   * @param max The maximum valid value
   * @param name The name of the input parameter being tested.
   */
  public static isInRange<T extends number>(value: T, min: T, max: T, name: string): void {
    if (value < min || value > max) {
      const message = `Arg ${name} = ${value} must be in the range [${min}...${max}]`;

      throw new RangeError(message);
    }
  }

  /**
   * Asserts that the input index is valid for the given array
   * @param index The input index used to access the array
   * @param array The input array to use to validate index
   * @param name The name of the input parameter being tested.
   */
  public static indexIsInRangeFor<T>(index: number, array: T[], name: string): void {
    Guard.isInRange(index, 0, array.length - 1, name);
  }

  /**
   * Asserts that the input count is valid for the given array
   * @param startIndex The startIndex to start processing the array from
   * @param count The number of array elements to process from startIndex
   * @param array The input array to use to validate count
   * @param name The name of the input parameter being tested.
   */
  public static countIsInRangeFor<T>(startIndex: number, count: number, array: T[], name: string): void {
    Guard.isInRange(count, 1, array.length - startIndex, name);
  }

  /**
   * Asserts that the input value is a boolean
   * @param value
   * @returns
   */
  public static isBoolean(value: unknown, name: string): asserts value is boolean {
    if (!isBoolean(value)) {
      throw new Error(`${name} must be a boolean`);
    }
  }

  /**
   * Asserts that the input value is a valid Date - ie that the Date.getTime returns a finite number
   * @param date
   * @returns
   */
  public static isValidDate(value: unknown, name: string): asserts value is Date {
    if (!isValidDate(value)) {
      throw new Error(`${name} must be a valid Date`);
    }
  }

  /**
   * Asserts that the input value is a valid number enum value
   * @param value
   * @param enumType
   * @returns
   */
  public static isValidNumberEnumValue<T>(
    value: unknown,
    enumType: { [key: string]: T },
    name: string
  ): asserts value is T {
    if (!isValidNumberEnumValue<T>(value, enumType)) {
      throw new Error(`${name} must be an ${enumType} enum value`);
    }
  }

  /**
   * Asserts that the input value is a valid string enum value
   * @param value
   * @param enumType
   * @returns
   */
  public static isValidStringEnumValue<T>(
    value: unknown,
    enumType: { [key: string]: T },
    name: string
  ): asserts value is T {
    if (!isValidStringEnumValue<T>(value, enumType)) {
      throw new Error(`${name} must be an ${enumType} enum value`);
    }
  }

  /**
   * Asserts that the input value is an array
   * @param value
   * @returns
   */
  public static isArray(value: unknown, name: string): asserts value is [] {
    if (!isArray(value)) {
      throw new Error(`${name} must be a valid Array`);
    }
  }

  /**
   * Asserts that the input value is an array of strings
   * @param value
   * @returns
   */
  public static isArrayOfStrings(value: unknown, name: string): asserts value is string[] {
    if (!isArrayOfStrings(value)) {
      throw new Error(`${name} must be a array of strings`);
    }
  }

  /**
   * Asserts that the input value is an array of non empty strings
   * @param value
   * @returns
   */
  public static isArrayOfNotEmptyStrings(value: unknown, name: string): asserts value is string[] {
    if (!isArrayOfNotEmptyStrings(value)) {
      throw new Error(`${name} must be a array of strings`);
    }
  }

  /**
   * Asserts that the input value is an array of objects
   * @param value
   * @returns
   */
  public static isArrayOfObjects(value: unknown, name: string): asserts value is object[] {
    if (!isArrayOfObjects(value)) {
      throw new Error(`${name} must be a array of objects`);
    }
  }

  /**
   * Asserts that the input value is an array of type T
   * @param value
   * @returns
   */
  public static isArrayOfType<T extends object>(
    value: unknown,
    type: { new (...args: any[]): T },
    name: string
  ): asserts value is T[] {
    if (!isArrayOfType(value, type)) {
      throw new Error(`${name} must be a array of specified type`);
    }
  }

  /**
   * Asserts that the input value is an array of finite numbers
   * @param value
   * @returns
   */
  public static isArrayOfFiniteNumbers(value: unknown, name: string): asserts value is number[] {
    if (!isArrayOfFiniteNumbers(value)) {
      throw new Error(`${name} must be a array of finite numbers`);
    }
  }

  /**
   * Asserts that the input value is an array of safe integers
   * @param value
   * @returns
   */
  public static isArrayOfSafeIntegers(value: unknown, name: string): asserts value is number[] {
    if (!isArrayOfSafeIntegers(value)) {
      throw new Error(`${name} must be a array of safe integers`);
    }
  }

  /**
   * Asserts that the input value is an array of booleans
   * @param value
   * @returns
   */
  public static isArrayOfBooleans(value: unknown, name: string): asserts value is boolean[] {
    if (!isArrayOfBooleans(value)) {
      throw new Error(`${name} must be a array of booleans`);
    }
  }

  /**
   * Asserts that the input value is an array of valid dates
   * @param value
   * @returns
   */
  public static isArrayOfValidDates(value: unknown, name: string): asserts value is Date[] {
    if (!isArrayOfValidDates(value)) {
      throw new Error(`${name} must be a array of valid Date`);
    }
  }
}
