/**
 * Type guard that checks if value is null or undefined
 * @param value
 * @returns
 */
export function isNullOrUndefined(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * Type guard that checks if value is not null or undefined
 * @param value
 * @returns
 */
export function isNotNullOrUndefined<T>(value: T | undefined | null): value is T {
  return value !== null && value !== undefined;
}

/**
 * Type guard that checks if value is undefined
 * @param value
 * @returns
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

/**
 * Type guard that checks if value is defined
 * @param value
 * @returns
 */
export function isNotUndefined<T>(value: T | undefined | null): value is T | null {
  return value !== undefined;
}
