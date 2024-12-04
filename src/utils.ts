"use strict";

export const ufanc = (
  array: number[],
  callback: (x: number) => number,
): number[] => {
  return array.map((v) => callback(v));
};

export const copy = <T extends object>(x: T): T => {
  return JSON.parse(JSON.stringify(x));
};
