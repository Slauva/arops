"use strict";

import { ufanc } from "../utils";
import { ValueError } from "../error";

export const add = (x: number[], y: number | number[]): number[] => {
  if (Array.isArray(y)) {
    if (x.length === y.length) {
      return x.map((value, index) => value + y[index]);
    } else {
      throw new ValueError(
        `operands could not be broadcast together with shapes (${x.length},) (${y.length},)`,
      );
    }
  } else {
    return ufanc(x, (value) => value + y);
  }
};

export const subtract = (x: number[], y: number | number[]): number[] => {
  if (Array.isArray(y)) {
    if (x.length === y.length) {
      return x.map((value, index) => value - y[index]);
    } else {
      throw new ValueError(
        `operands could not be broadcast together with shapes (${x.length},) (${y.length},)`,
      );
    }
  } else {
    return ufanc(x, (value) => value - y);
  }
};

export const multiply = (x: number[], y: number | number[]): number[] => {
  if (Array.isArray(y)) {
    if (x.length === y.length) {
      return x.map((value, index) => value * y[index]);
    } else {
      throw new ValueError(
        `operands could not be broadcast together with shapes (${x.length},) (${y.length},)`,
      );
    }
  } else {
    return ufanc(x, (value) => value * y);
  }
};

export const divide = (x: number[], y: number | number[]): number[] => {
  if (Array.isArray(y)) {
    if (x.length === y.length) {
      return x.map((value, index) => value / y[index]);
    } else {
      throw new ValueError(
        `operands could not be broadcast together with shapes (${x.length},) (${y.length},)`,
      );
    }
  } else {
    return ufanc(x, (value) => value / y);
  }
};

export const sum = (x: number[]): number => {
  return x.reduce((a, b) => a + b, 0);
};

export const prod = (x: number[]): number => {
  return x.reduce((a, b) => a * b, 1);
};

export const cumsum = (x: number[]): number[] => {
  const out: number[] = [];
  let n = 0;
  x.forEach((value) => {
    out.push(n + value);
    n += value;
  });
  return out;
};

export const cumprod = (x: number[]): number[] => {
  const out: number[] = [];
  let n = 1;
  x.forEach((value) => {
    out.push(n * value);
    n *= value;
  });
  return out;
};

export const diff = (x: number[], n: number = 1): number[] => {
  let out: number[] = [...x];
  for (let i = 0; i < n; i++) {
    out = subtract(out.slice(1), out.slice(0, -1));
  }
  return out;
};
