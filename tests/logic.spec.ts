import { less } from "../src/logic";

describe("Boolean login operator for arrays", () => {
  test("If any values in array less then current value", () => {
    const input = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const target = [true, true, true, false, false, false, true, true, true];
    expect(less(input, 4)).toEqual(target);
  });
});
