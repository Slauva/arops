"use strict";

/**
 * Represents an error related to token parsing or handling.
 *
 * @extends {Error}
 * @category Error
 */
export class TokenError extends Error {
  /**
   * Constructs a new TokenError instance.
   *
   * @param {string} message - The error message that describes the error.
   */
  constructor(message: string) {
    super(message);
    this.name = "TokenError";
  }
}

/**
 * Represents an error related to invalid values or data.
 *
 * @extends {Error}
 * @category Error
 */
export class ValueError extends Error {
  /**
   * Constructs a new ValueError instance.
   *
   * @param {string} message - The error message that provides details about the value error.
   */
  constructor(message: string) {
    super(message);
    this.name = "ValueError";
  }
}
