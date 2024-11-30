import * as math from "../src/maths/basics";

describe("Test Basic Maths Operations", () => {
  test("Test abs()", () => {
    expect(math.abs([-1, -2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("Test sqrt()", () => {
    expect(math.sqrt([1, 4, 9, 16])).toEqual([1, 2, 3, 4]);
  });

  test("Test log()", () => {
    expect(math.log([1, math.e, math.e * math.e])).toEqual([0, 1, 2]);
  });

  test("Test log2()", () => {
    expect(math.log2([1, 2, 4, 8])).toEqual([0, 1, 2, 3]);
  });

  test("Test log10()", () => {
    expect(math.log10([1, 10, 100, 1000])).toEqual([0, 1, 2, 3]);
  });

  test("Test power()", () => {
    expect(math.power([1, 2, 3], 2)).toEqual([1, 4, 9]);
  });

  test("Test cos()", () => {
    const values = math.cos([0, math.pi / 2, math.pi]);
    const target = [1, 0, -1];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test sin()", () => {
    const values = math.sin([0, math.pi / 2, math.pi]);
    const target = [0, 1, 0];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test tan()", () => {
    const values = math.tan([0, math.pi / 4]);
    const target = [0, 1];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test arccos()", () => {
    const values = math.arccos([1, 0, -1]);
    const target = [0, math.pi / 2, math.pi];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test arcsin()", () => {
    const values = math.arcsin([0, 1, -1]);
    const target = [0, math.pi / 2, -math.pi / 2];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test arctan()", () => {
    const values = math.arctan([0, 1, -1]);
    const target = [0, math.pi / 4, -math.pi / 4];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test cosh()", () => {
    const values = math.cosh([0, 1, -1]);
    const target = [1, 1.543080634815244, 1.543080634815244];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test sinh()", () => {
    const values = math.sinh([0, 1, -1]);
    const target = [0, 1.1752011936438014, -1.1752011936438014];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test tanh()", () => {
    const values = math.tanh([0, 1, -1]);
    const target = [0, 0.7615941559557649, -0.7615941559557649];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test arccosh()", () => {
    const values = math.arccosh([1, 2, 3]);
    const target = [0, 1.3169578969248166, 1.762747174039086];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test arcsinh()", () => {
    const values = math.arcsinh([0, 1, -1]);
    const target = [0, 0.881373587019543, -0.881373587019543];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test arctanh()", () => {
    const values = math.arctanh([0, 0.78071444, 0.48047278]);
    const target = [0, 1.04719756, 0.52359878];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test exp()", () => {
    const values = math.exp([0, 1, 2]);
    const target = [1, 2.718281828459045, 7.38905609893065];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test ceil()", () => {
    const values = math.ceil([1.2, 2.5, 3.7]);
    const target = [2, 3, 4];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test floor()", () => {
    const values = math.floor([1.2, 2.5, 3.7]);
    const target = [1, 2, 3];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test fround()", () => {
    const values = math.fround([1.2, 2.5, 3.7]);
    const target = [1.2000000476837158, 2.5, 3.700000047683716];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 10);
    });
  });

  test("Test round()", () => {
    const values = math.round([1.2, 2.5, 3.7]);
    const target = [1, 3, 4];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });

  test("Test trunc()", () => {
    const values = math.trunc([1.2, 2.5, 3.7]);
    const target = [1, 2, 3];
    values.forEach((v, i) => {
      expect(values[i]).toBeCloseTo(target[i], 6);
    });
  });
});
