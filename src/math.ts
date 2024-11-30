"use strict";

const ufanc = (array: number[], callback: (x: number) => number): number[] => {
  return array.map((v) => callback(v));
};

export const abs = (array: number[]): number[] => ufanc(array, Math.abs);

export const sqrt = (array: number[]): number[] => ufanc(array, Math.sqrt);

export const log = (array: number[]): number[] => ufanc(array, Math.log);

export const log2 = (array: number[]): number[] => ufanc(array, Math.log2);

export const log10 = (array: number[]): number[] => ufanc(array, Math.log10);

export const power = (array: number[], p: number): number[] =>
  array.map((v) => Math.pow(v, p));

export const cos = (array: number[]): number[] => ufanc(array, Math.cos);

export const sin = (array: number[]): number[] => ufanc(array, Math.sin);

export const tan = (array: number[]): number[] => ufanc(array, Math.tan);

export const arccos = (array: number[]): number[] => ufanc(array, Math.acos);

export const arcsin = (array: number[]): number[] => ufanc(array, Math.asin);

export const arctan = (array: number[]): number[] => ufanc(array, Math.atan);

export const cosh = (array: number[]): number[] => ufanc(array, Math.cosh);

export const sinh = (array: number[]): number[] => ufanc(array, Math.sinh);

export const tanh = (array: number[]): number[] => ufanc(array, Math.tanh);

export const arccosh = (array: number[]): number[] => ufanc(array, Math.acosh);

export const arcsinh = (array: number[]): number[] => ufanc(array, Math.asinh);

export const exp = (array: number[]): number[] => ufanc(array, Math.exp);

export const deg2rad = (array: number[]): number[] =>
  array.map((v) => (v * Math.PI) / 180);

export const rad2deg = (array: number[]): number[] =>
  array.map((v) => (v * 180) / Math.PI);

export const min = (array: number[]): number => {
  return array.reduce(
    (acc, value) => (acc > value ? value : acc),
    Number.MAX_VALUE,
  );
};

export const argmin = (array: number[]): number => {
  const out = array.reduce<[number, number]>(
    ([acc, t_i], value, i) => (acc > value ? [value, i] : [acc, t_i]),
    [Number.MAX_VALUE, -1],
  );
  return out[1];
};

export const max = (array: number[]): number => {
  return array.reduce(
    (acc, value) => (acc < value ? value : acc),
    Number.MIN_VALUE,
  );
};

export const argmax = (array: number[]): number => {
  const out = array.reduce<[number, number]>(
    ([acc, t_i], value, i) => (acc < value ? [value, i] : [acc, t_i]),
    [Number.MIN_VALUE, -1],
  );
  return out[1];
};

export const add = (array: number[], n: number): number[] =>
  ufanc(array, (x) => x + n);

export const sub = (array: number[], n: number): number[] =>
  ufanc(array, (x) => x - n);

export const mul = (array: number[], n: number): number[] =>
  ufanc(array, (x) => x * n);

export const div = (array: number[], n: number): number[] =>
  ufanc(array, (x) => x / n);

export const sum = (array: number[]): number => {
  return array.reduce((a, b) => a + b, 0);
};

export const mean = (array: number[]): number => {
  if (array.length === 0) return 0;
  return sum(array) / array.length;
};

export const std = (array: number[]): number => {
  return Math.sqrt(sum(power(sub(array, mean(array)), 2)) / array.length);
};
