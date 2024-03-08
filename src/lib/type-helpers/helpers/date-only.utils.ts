import { DefaultUTCDateOnlyComparer } from './date-only.comparer';

export class DateOnlyUtils {
  /**
   * Creates an ISO formatted (yyyy-mm-dd) Date Only string from the specified Date instance.
   * eg. 2023-09-25
   * @param date
   * @returns
   */
  public static toISODateOnlyString(date: Date): string {
    const isoString = date.toISOString();
    return isoString.substring(0, 10);
  }

  /**
   * Creates a new UTC Date Only instance (time component wiped) from the specified Date instance.
   * @param date
   * @returns
   */
  public static toUTCDateOnly(date: Date): Date {
    return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  }

  /**
   * Creates an array of UTC Date Only instances from the from date to the to date inclusive
   * @param from
   * @param to
   */
  public static expandRangeToUTCDateOnly(from: Date, to: Date): Date[] {
    const dates: Date[] = [];
    const next = DateOnlyUtils.toUTCDateOnly(from);

    do {
      dates.push(new Date(next));
      next.setUTCDate(next.getUTCDate() + 1);
    } while (DefaultUTCDateOnlyComparer.isEarlierOrEqual(next, to));

    return dates;
  }

  /**
   * Determines if the 2 dates fall on the same UTC day/month/year - time is ignored
   * @param left
   * @param right
   * @returns
   */
  public static isSameUTCCalendarDay(left: Date, right: Date): boolean {
    return (
      left.getUTCDate() === right.getUTCDate() &&
      left.getUTCMonth() === right.getUTCMonth() &&
      left.getUTCFullYear() === right.getUTCFullYear()
    );
  }
}
