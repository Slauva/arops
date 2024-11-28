"use strict";

export class TokenError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TokenError";
  }
}
