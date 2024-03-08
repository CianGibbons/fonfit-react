import { DateOnlyUtils } from './date-only.utils';
import { DateComparerBase } from './date.comparer';

/**
 * Date comparer that compares only the date parts of the params.
 * Note this uses the Date's UTC values for comparison
 */
export class UTCDateOnlyComparer extends DateComparerBase {
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
    const leftDateOnly = DateOnlyUtils.toUTCDateOnly(left);
    const rightDateOnly = DateOnlyUtils.toUTCDateOnly(right);

    const result = leftDateOnly.getTime() - rightDateOnly.getTime();
    if (result < 0) {
      return -1;
    } else if (result > 0) {
      return 1;
    }

    return 0;
  }
}

/** Instance of the UTCDateOnlyComparer */
export const DefaultUTCDateOnlyComparer = new UTCDateOnlyComparer();
