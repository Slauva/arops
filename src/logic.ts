"use strict";

export const less = <T extends Number>(
  array: Array<T>,
  value: T,
  eq: Boolean = false
): Array<Boolean> => {
  return array.map<Boolean>((t_value) => {
    if (eq) {
      return t_value <= value;
    } else {
      return t_value < value;
    }
  });
};

export const greater = <T extends Number>(
  array: Array<T>,
  value: T,
  eq: Boolean = false
): Array<Boolean> => {
  return array.map<Boolean>((t_value) => {
    if (eq) {
      return t_value >= value;
    } else {
      return t_value > value;
    }
  });
};

export const equal = <T extends Number>(
  array: Array<T>,
  value: T
): Array<Boolean> => {
  return array.map<Boolean>((t_value) => t_value === value);
};
