"use strict";

const ufanc = (array: number[], callback: (x: number) => number): number[] => {
  return array.map((v) => callback(v));
};
