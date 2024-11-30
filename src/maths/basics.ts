"use strict";
import { ufanc } from "../utils";

/**
 * Constant representing the mathematical constant Pi (π).
 * @type {number}
 */
export const pi = Math.PI;

/**
 * Constant representing the Euler's number (e).
 * @type {number}
 */
export const e = Math.E;

/**
 * Calculate absolute values of each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with the absolute value of each input element.
 * @example
 * ```js
 * > abs([-1, -2, -3, 4])
 * [1, 2, 3, 4]
 * ```
 */
export const abs = (array: number[]): number[] => ufanc(array, Math.abs);

/**
 * Calculate the square root of each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with the square root of each input element.
 * @example
 * ```js
 * > sqrt([1, 4, 9, 16])
 * [1, 2, 3, 4]
 * ```
 */
export const sqrt = (array: number[]): number[] => ufanc(array, Math.sqrt);

/**
 * Calculate the natural logarithm (base e) of each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with the natural logarithm of each input element.
 * @example
 * ```js
 * > log([1, Math.E, Math.E * Math.E])
 * [0, 1, 2]
 * ```
 */
export const log = (array: number[]): number[] => ufanc(array, Math.log);

/**
 * Calculate the base-2 logarithm of each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with the base-2 logarithm of each input element.
 * @example
 * ```js
 * > log2([1, 2, 4, 8])
 * [0, 1, 2, 3]
 * ```
 */
export const log2 = (array: number[]): number[] => ufanc(array, Math.log2);

/**
 * Calculate the base-10 logarithm of each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with the base-10 logarithm of each input element.
 * @example
 * ```js
 * > log10([1, 10, 100, 1000])
 * [0, 1, 2, 3]
 * ```
 */
export const log10 = (array: number[]): number[] => ufanc(array, Math.log10);

/**
 * Raise each element in an array to the power of p.
 * @param {number[]} array - The array of numbers.
 * @param {number} p - The power to raise each element.
 * @returns {number[]} An array with each input element raised to the power of p.
 * @example
 * ```js
 * > power([1, 2, 3], 2)
 * [1, 4, 9]
 * ```
 */
export const power = (array: number[], p: number): number[] =>
  array.map((v) => Math.pow(v, p));

/**
 * Calculate the cosine of each element in an array (angle in radians).
 * @param {number[]} array - The array of numbers representing angles in radians.
 * @returns {number[]} An array with the cosine of each input element.
 * @example
 * ```js
 * > cos([0, Math.PI / 2, Math.PI])
 * [1, 0, -1]
 * ```
 */
export const cos = (array: number[]): number[] => ufanc(array, Math.cos);

/**
 * Calculate the sine of each element in an array (angle in radians).
 * @param {number[]} array - The array of numbers representing angles in radians.
 * @returns {number[]} An array with the sine of each input element.
 * @example
 * ```js
 * > sin([0, Math.PI / 2, Math.PI])
 * [0, 1, 0]
 * ```
 */
export const sin = (array: number[]): number[] => ufanc(array, Math.sin);

/**
 * Calculate the tangent of each element in an array (angle in radians).
 * @param {number[]} array - The array of numbers representing angles in radians.
 * @returns {number[]} An array with the tangent of each input element.
 * @example
 * ```js
 * > tan([0, Math.PI / 4])
 * [0, 1]
 * ```
 */
export const tan = (array: number[]): number[] => ufanc(array, Math.tan);

/**
 * Calculate the arccosine of each element in an array.
 * @param {number[]} array - The array of numbers in the range [-1, 1].
 * @returns {number[]} An array with the arccosine of each input element.
 * @example
 * ```js
 * > arccos([1, 0, -1])
 * [0, Math.PI / 2, Math.PI]
 * ```
 */
export const arccos = (array: number[]): number[] => ufanc(array, Math.acos);

/**
 * Calculate the arcsine of each element in an array.
 * @param {number[]} array - The array of numbers in the range [-1, 1].
 * @returns {number[]} An array with the arcsine of each input element.
 * @example
 * ```js
 * > arcsin([0, 1, -1])
 * [0, Math.PI / 2, -Math.PI / 2]
 * ```
 */
export const arcsin = (array: number[]): number[] => ufanc(array, Math.asin);

/**
 * Calculate the arctangent of each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with the arctangent of each input element.
 * @example
 * ```js
 * > arctan([0, 1, -1])
 * [0, Math.PI / 4, -Math.PI / 4]
 * ```
 */
export const arctan = (array: number[]): number[] => ufanc(array, Math.atan);

/**
 * Calculate the hyperbolic cosine of each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with the hyperbolic cosine of each input element.
 * @example
 * ```js
 * > cosh([0, 1, -1])
 * [1, 1.543080634815244, 1.543080634815244]
 * ```
 */
export const cosh = (array: number[]): number[] => ufanc(array, Math.cosh);

/**
 * Calculate the hyperbolic sine of each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with the hyperbolic sine of each input element.
 * @example
 * ```js
 * > sinh([0, 1, -1])
 * [0, 1.1752011936438014, -1.1752011936438014]
 * ```
 */
export const sinh = (array: number[]): number[] => ufanc(array, Math.sinh);

/**
 * Calculate the hyperbolic tangent of each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with the hyperbolic tangent of each input element.
 * @example
 * ```js
 * > tanh([0, 1, -1])
 * [0, 0.7615941559557649, -0.7615941559557649]
 * ```
 */
export const tanh = (array: number[]): number[] => ufanc(array, Math.tanh);

/**
 * Calculate the hyperbolic arccosine of each element in an array.
 * @param {number[]} array - The array of numbers where each element is greater than or equal to 1.
 * @returns {number[]} An array with the hyperbolic arccosine of each input element.
 * @example
 * ```js
 * > arccosh([1, 2, 3])
 * [0, 1.3169578969248166, 1.762747174039086]
 * ```
 */
export const arccosh = (array: number[]): number[] => ufanc(array, Math.acosh);

/**
 * Calculate the hyperbolic arcsine of each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with the hyperbolic arcsine of each input element.
 * @example
 * ```js
 * > arcsinh([0, 1, -1])
 * [0, 0.881373587019543, -0.881373587019543]
 * ```
 */
export const arcsinh = (array: number[]): number[] => ufanc(array, Math.asinh);

/**
 * Calculate the hyperbolic arctan of each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with the hyperbolic arcsine of each input element.
 * @example
 * ```js
 * > arctanh([0, 0.78071444, 0.48047278])
 * [0, 1.04719756, 0.52359878]
 * ```
 */
export const arctanh = (array: number[]): number[] => ufanc(array, Math.atanh);

/**
 * Calculate the exponential function of each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with the exponential function of each input element.
 * @example
 * ```js
 * > exp([0, 1, 2])
 * [1, 2.718281828459045, 7.38905609893065]
 * ```
 */
export const exp = (array: number[]): number[] => ufanc(array, Math.exp);

/**
 * Calculate the smallest integer greater than or equal to each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with the ceiling value of each input element.
 * @example
 * ```js
 * > ceil([1.2, 2.5, 3.7])
 * [2, 3, 4]
 * ```
 */
export const ceil = (array: number[]): number[] => ufanc(array, Math.ceil);

/**
 * Calculate the largest integer less than or equal to each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with the floor value of each input element.
 * @example
 * ```js
 * > floor([1.2, 2.5, 3.7])
 * [1, 2, 3]
 * ```
 */
export const floor = (array: number[]): number[] => ufanc(array, Math.floor);

/**
 * Calculate the nearest single-precision float representation of each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array of numbers in single-precision float.
 * @example
 * ```js
 * > fround([1.2, 2.5, 3.7])
 * [1.2000000476837158, 2.5, 3.700000047683716]
 * ```
 */
export const fround = (array: number[]): number[] => ufanc(array, Math.fround);

/**
 * Round each element in an array to the nearest integer.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with each input element rounded to the nearest integer.
 * @example
 * ```js
 * > round([1.2, 2.5, 3.7])
 * [1, 3, 4]
 * ```
 */
export const round = (array: number[]): number[] => ufanc(array, Math.round);

/**
 * Truncate the decimal part of each element in an array.
 * @param {number[]} array - The array of numbers.
 * @returns {number[]} An array with the integer part of each input element.
 * @example
 * ```js
 * > trunc([1.2, 2.5, 3.7])
 * [1, 2, 3]
 * ```
 */
export const trunc = (array: number[]): number[] => ufanc(array, Math.trunc);
