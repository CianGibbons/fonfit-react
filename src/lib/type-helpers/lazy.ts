import { isNotUndefined, isUndefined } from './helpers/common';

/**
 * The Lazy initializer function signature.
 */
export interface ILazyInitializer<T> {
  (): T;
}

/**
 * Provides support for lazy initialization.
 */
export class Lazy<T> {
  private instance: T | undefined;
  private readonly initializer: ILazyInitializer<T>;

  /**
   * Initializes a new instance of the Lazy class that uses a specified initialization function.
   * @param initializer The function to invoke to produce the lazily-initialized value when it is needed.
   */
  constructor(initializer: ILazyInitializer<T>) {
    this.initializer = initializer;
  }

  /**
   * Gets a value indicating whether this has been initialized.
   */
  public get isInitialized(): boolean {
    return isNotUndefined(this.instance);
  }

  /**
   * Gets the lazily initialized value of the current instance
   */
  public get value(): T {
    if (isUndefined(this.instance)) {
      this.instance = this.initializer();
    }

    return this.instance;
  }
}
