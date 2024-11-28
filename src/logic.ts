"use strict";
import { TokenError } from "./error";

/**
 * Returns an array indicating whether each element of the input array is less than or
 * equal to a given value (if `eq` is true) or strictly less than the value (if `eq` is false).
 *
 * @example
 * > less([1, 2, 3, 4], 3)
 * [true, true, false, false]
 *
 * > less([1, 2, 3, 4], 3, true)
 * [true, true, true, false]
 *
 * @param {Array<Number>} array - The array of numbers to be compared.
 * @param {Number} value - The value each element of the array is compared against.
 * @param {Boolean} [eq=false] - A boolean indicating if the comparison should be
 * less than or equal to (`true`), or strictly less than (`false`).
 * @returns {Array<Boolean>} An array of booleans where each boolean indicates if
 * the corresponding element in `array` is less than (or less than or equal to) `value`.
 */
export const less = (
  array: Array<Number>,
  value: Number,
  eq: Boolean = false,
): Array<Boolean> => {
  return array.map<Boolean>((t_value) => {
    if (eq) {
      return t_value <= value;
    } else {
      return t_value < value;
    }
  });
};

/**
 * Returns an array indicating whether each element of the input array is greater than or
 * equal to a given value (if `eq` is true) or strictly greater than the value (if `eq` is false).
 *
 * @example
 * > greater([1, 2, 3, 4], 3)
 * [false, false, false, true]
 *
 * > greater([1, 2, 3, 4], 3, true)
 * [false, false, true, true]
 *
 * @param {Array<Number>} array - The array of numbers to be compared.
 * @param {Number} value - The value each element of the array is compared against.
 * @param {Boolean} [eq=false] - A boolean indicating if the comparison should be
 * greater than or equal to (`true`), or strictly greater than (`false`).
 * @returns {Array<Boolean>} An array of booleans where each boolean indicates if
 * the corresponding element in `array` is greater than (or greater than or equal to) `value`.
 */
export const greater = (
  array: Array<Number>,
  value: Number,
  eq: Boolean = false,
): Array<Boolean> => {
  return array.map<Boolean>((t_value) => {
    if (eq) {
      return t_value >= value;
    } else {
      return t_value > value;
    }
  });
};

/**
 * Returns an array indicating whether each element of the input array is equal to a given value.
 *
 * @example
 * > equal([1, 2, 1, 3], 1)
 * [true, false, true, false]
 *
 * @param {Array<Number>} array - The array of numbers to be compared.
 * @param {Number} value - The value each element of the array is compared against.
 * @returns {Array<Boolean>} An array of booleans where each boolean indicates if
 * the corresponding element in `array` is equal to `value`.
 */
export const equal = (array: Array<Number>, value: Number): Array<Boolean> => {
  return array.map<Boolean>((t_value) => t_value === value);
};

/**
 * Checks if all elements in the input array are `true`.
 *
 * @example
 * > all([true, true, true])
 * true
 *
 * > some([false, true, true])
 * false
 *
 * @param {Array<Boolean>} array - The array of booleans to be evaluated.
 * @returns {Boolean} Returns `true` if all elements in `array` are `true`, otherwise `false`.
 */
export const all = (array: Array<Boolean>): Boolean => {
  return array.reduce<Boolean>((prev, curr) => prev && curr, true);
};

/**
 * Checks if at least one element in the input array is `true`.
 *
 * @example
 * > some([true, false, false])
 * true
 *
 * > some([false, false, false])
 * false
 *
 * @param {Array<Boolean>} array - The array of booleans to be evaluated.
 * @returns {Boolean} Returns `true` if at least one element in `array` is `true`, otherwise `false`.
 */
export const some = (array: Array<Boolean>): Boolean => {
  return array.reduce<Boolean>((prev, curr) => prev || curr, false);
};

/**
 * A constant object mapping comparison operators to their respective left-side token representations.
 *
 * @type {Object.<string, string>}
 * @readonly
 */
const l_token = {
  ">": "gr",
  ">=": "ge",
  "<": "ls",
  "<=": "le",
  "=": "eq",
} as const;

/**
 * A constant object mapping comparison operators to their respective right-side token representations.
 *
 * @type {Object.<string, string>}
 * @readonly
 */
const r_token = {
  ">": "ls",
  ">=": "le",
  "<": "gr",
  "<=": "ge",
  "=": "eq",
} as const;

/**
 * Type alias representing the keys of `l_token` and `r_token` objects.
 *
 * @typedef {keyof typeof l_token} Token
 */
type Token = keyof typeof l_token;

/**
 * Type alias representing the values of the `l_token` and `r_token` objects.
 *
 * @typedef {(typeof l_token)[Token]} TokenValues
 */
type TokenValues = (typeof l_token)[Token];

/**
 * Parses a condition string and returns an object containing a numeric value and its corresponding
 * token expression derived from predefined token mappings.
 *
 * The condition string should have the format `{value/x} {expression} {x/value}`, where
 * `value` should to be number value, and expression like token: ">" | ">=" | "<" | "<=" | "=".
 * It supports conditions where 'x' denotes the variable and the `expression` determines
 * the comparison to either side.
 *
 * If `x` is at the left of the expression, the `l_token` mapping is used; if on the right,
 * the `r_token` mapping applies.
 *
 * @example
 * > const out = parseCondition("1 < x")
 * > console.log(out)
 * {value: 1, expression: "gr"}
 *
 * @param {string} condition - A string representing the condition to parse.
 * @returns {{value: number, expression: TokenValues}} An object containing the numerical value found
 * in the condition and the corresponding token expression.
 * @throws {TokenError} Thrown when the condition string does not match the required format.
 */
const parseCondition = (
  condition: string,
): { value: number; expression: TokenValues } => {
  const values = condition.split(" ");

  if (values.length !== 3) {
    throw new TokenError(
      "Condition should to be like: '{value/x} {expression} {x/value}'",
    );
  }

  if (values[0] === "x") {
    return {
      value: parseFloat(values[2]),
      expression: l_token[values[1] as Token],
    };
  }

  if (values[2] === "x") {
    return {
      value: parseFloat(values[0]),
      expression: r_token[values[1] as Token],
    };
  }

  throw new TokenError(
    "Condition should to be like: '{value/x} {expression} {x/value}'",
  );
};

/**
 * A mapping of token expressions to their respective evaluation functions.
 * Each function applies a specific comparison operation to an array of numbers:
 *
 * @param ls - Function less
 * @param le - Function less or equal
 * @param gr - Function greater
 * @param ge - Function greater or equal
 * @param eq - Function equal
 *
 * @type {Record<"gr" | "ge" | "ls" | "le" | "eq", (array: Number[], value: Number) => Boolean[]>}
 */
export const expr = {
  ls: (array: Array<Number>, value: Number) => less(array, value, false),
  le: (array: Array<Number>, value: Number) => less(array, value, true),
  gr: (array: Array<Number>, value: Number) => greater(array, value, false),
  ge: (array: Array<Number>, value: Number) => greater(array, value, true),
  eq: equal,
};

/**
 * Evaluates a set of conditions over an array of numbers, returning an array of booleans indicating
 * whether each element in the input array satisfies all specified conditions.
 *
 * The condition string should have the format `{value/x} {expression} {x/value}`, where
 * `value` should to be number value, and expression like token: ">" | ">=" | "<" | "<=" | "=".
 *
 * The `conditions` are parsed using the `parseCondition` function and each parsed condition is evaluated
 * using the corresponding function in `expr`.
 *
 * It supports conditions where 'x' denotes the variable and the `expression` determines
 * the comparison to either side.
 *
 * @example
 * > const out = condition([0, 1, 2, 3], "1 <= x, x < 3")
 * > console.log(out)
 * [false, true, true, false]
 *
 * @param {Array<Number>} array - The array of numbers to evaluate against the conditions.
 * @param {string} conditions - A comma-separated string containing conditions to evaluate.
 * @returns {Array<Boolean>} An array of boolean values indicating if each element in the array satisfies
 * all the conditions. True means all conditions are met for that element, otherwise false.
 *
 * @throws {TokenError} Throws an error if any condition string does not match the required format.
 */
export const condition = (
  array: Array<Number>,
  conditions: string,
): Array<Boolean> => {
  const expressions = conditions.split(",");
  const parsed = expressions.map((value) => parseCondition(value.trim()));
  const out: Array<Array<Boolean>> = [];
  parsed.forEach(({ value, expression }) => {
    const func = expr[expression];
    out.push(func(array, value));
  });
  return out.reduce<Array<Boolean>>(
    (prev, curr) => {
      return prev.map((v, i) => v && curr[i]);
    },
    Array.from({ length: array.length }).fill(true) as Array<Boolean>,
  );
};
