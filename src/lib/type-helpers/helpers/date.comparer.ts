/**
 * Defines the interface a date comparer must implement
 */
export interface IDateComparer {
  compare: (left: Date, right: Date) => number;
  isEqual: (left: Date, right: Date) => boolean;
  isLater: (left: Date, right: Date) => boolean;
  isEarlier: (left: Date, right: Date) => boolean;
  isLaterOrEqual: (left: Date, right: Date) => boolean;
  isEarlierOrEqual: (left: Date, right: Date) => boolean;
}

/**
 * Base class for implementing date comparers
 */
export abstract class DateComparerBase implements IDateComparer {
  /**
   * Compares 2 date values. Returns:
   *  0 if left equal right;
   *  1 if left > right;
   *  -1 if left < right;
   * @param left
   * @param right
   * @returns
   */
  public abstract compare(left: Date, right: Date): number;

  /**
   * Determines if left and right are equal
   * @param left
   * @param right
   * @returns
   */
  public isEqual(left: Date, right: Date): boolean {
    return this.compare(left, right) === 0;
  }

  /**
   * Determines if left is later than right
   * @param left
   * @param right
   * @returns
   */
  public isLater(left: Date, right: Date): boolean {
    return this.compare(left, right) > 0;
  }

  /**
   * Determines if left is earlier than right
   * @param left
   * @param right
   * @returns
   */
  public isEarlier(left: Date, right: Date): boolean {
    return this.compare(left, right) < 0;
  }

  /**
   * Determines if left is later than or equal to right
   * @param left
   * @param right
   * @returns
   */
  public isLaterOrEqual(left: Date, right: Date): boolean {
    return this.compare(left, right) >= 0;
  }

  /**
   * Determines if left is earlier than or equal to right
   * @param left
   * @param right
   * @returns
   */
  public isEarlierOrEqual(left: Date, right: Date): boolean {
    return this.compare(left, right) <= 0;
  }
}
