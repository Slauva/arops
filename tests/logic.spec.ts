import { less, greater, equal, all, some, condition } from "../src/logic";
import { TokenError } from "../src/error";

describe("Boolean login operator for arrays", () => {
  test("If any values in array less then current value", () => {
    const input = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const target = [true, true, true, false, false, false, true, true, true];
    expect(less(input, 4)).toEqual(target);
  });

  test("If any values in array less then current value INT8", () => {
    const input = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const target = [true, true, true, false, false, false, true, true, true];
    expect(less(input, 4)).toEqual(target);
  });

  test("If any values in array less or equal then current value", () => {
    const input = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const target = [true, true, true, true, false, true, true, true, true];
    expect(less(input, 4, true)).toEqual(target);
  });

  test("If any values in array greater then current value", () => {
    const input = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const target = [
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
    ];
    expect(greater(input, 4)).toEqual(target);
  });

  test("If any values in array greater or equal then current value", () => {
    const input = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const target = [false, false, false, true, true, true, false, false, false];
    expect(greater(input, 4, true)).toEqual(target);
  });

  test("If any values in array equal to current value", () => {
    const input = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const target = [
      false,
      false,
      false,
      true,
      false,
      true,
      false,
      false,
      false,
    ];
    expect(equal(input, 4)).toEqual(target);
  });

  test("If all values in array is true", () => {
    const input = [true, true, true];
    expect(all(input)).toEqual(true);
  });

  test("Reject: If all values in array is true", () => {
    const input = [true, false, true];
    expect(all(input)).toEqual(false);
  });

  test("If has at least on true value in array", () => {
    const input = [false, true, false];
    expect(some(input)).toEqual(true);
  });

  test("Reject: If has at least on true value in array", () => {
    const input = [false, false, false];
    expect(some(input)).toEqual(false);
  });

  test("Test condition 0 < x < 3", () => {
    const input = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const target = [true, true, false, false, false, false, false, true, true];
    expect(condition(input, "0 < x, x < 3")).toEqual(target);
  });

  test("Test condition 0 < x < 3.3", () => {
    const input = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const target = [true, true, true, false, false, false, true, true, true];
    expect(condition(input, "0 < x, x < 3.3")).toEqual(target);
  });

  test("Test condition 1 <= x < 3", () => {
    const input = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const target = [true, true, false, false, false, false, false, true, true];
    expect(condition(input, "1 <= x, 3 > x")).toEqual(target);
  });

  test("Throw TokenError: Test condition 1 <= xx < 3", () => {
    const input = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const target = () => condition(input, "1 <= xx, 3 > x");
    expect(target).toThrow(TokenError);
  });

  test("Throw TokenError: Test w/o condition", () => {
    const input = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const target = () => condition(input, "");
    expect(target).toThrow(TokenError);
  });
});
