import { DateComparerBase } from './date.comparer';

/**
 * Date comparer that compares the date/time parts of the params
 */
export class DateTimeComparer extends DateComparerBase {
  /**
   * Compares the 2 date values.
   * Returns:
   *  0 if left equals right;
   *  1 if left > right;
   *  -1 if left < right;
   * @param left
   * @param right
   * @returns
   */
  public compare(left: Date, right: Date): number {
    const result = left.getTime() - right.getTime();

    if (result < 0) {
      return -1;
    } else if (result > 0) {
      return 1;
    }

    return 0;
  }
}

/**
 * Instance of the DateTimeComparer
 */
export const DefaultDateTimeComparer = new DateTimeComparer();
