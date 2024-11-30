## :toolbox: Functions

- [abs](#gear-abs)
- [sqrt](#gear-sqrt)
- [log](#gear-log)
- [log2](#gear-log2)
- [log10](#gear-log10)
- [power](#gear-power)
- [cos](#gear-cos)
- [sin](#gear-sin)
- [tan](#gear-tan)
- [arccos](#gear-arccos)
- [arcsin](#gear-arcsin)
- [arctan](#gear-arctan)
- [cosh](#gear-cosh)
- [sinh](#gear-sinh)
- [tanh](#gear-tanh)
- [arccosh](#gear-arccosh)
- [arcsinh](#gear-arcsinh)
- [exp](#gear-exp)
- [ceil](#gear-ceil)
- [floor](#gear-floor)
- [fround](#gear-fround)
- [round](#gear-round)
- [trunc](#gear-trunc)

### :gear: abs

Calculate absolute values of each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `abs`    | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> abs([-1, -2, -3, 4])
[1, 2, 3, 4]
```

### :gear: sqrt

Calculate the square root of each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `sqrt`   | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> sqrt([1, 4, 9, 16])
[1, 2, 3, 4]
```

### :gear: log

Calculate the natural logarithm (base e) of each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `log`    | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> log([1, Math.E, Math.E * Math.E])
[0, 1, 2]
```

### :gear: log2

Calculate the base-2 logarithm of each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `log2`   | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> log2([1, 2, 4, 8])
[0, 1, 2, 3]
```

### :gear: log10

Calculate the base-10 logarithm of each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `log10`  | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> log10([1, 10, 100, 1000])
[0, 1, 2, 3]
```

### :gear: power

Raise each element in an array to the power of p.

| Function | Type                                       |
| -------- | ------------------------------------------ |
| `power`  | `(array: number[], p: number) => number[]` |

Parameters:

- `array`: - The array of numbers.
- `p`: - The power to raise each element.

Examples:

```js
> power([1, 2, 3], 2)
[1, 4, 9]
```

### :gear: cos

Calculate the cosine of each element in an array (angle in radians).

| Function | Type                            |
| -------- | ------------------------------- |
| `cos`    | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers representing angles in radians.

Examples:

```js
> cos([0, Math.PI / 2, Math.PI])
[1, 0, -1]
```

### :gear: sin

Calculate the sine of each element in an array (angle in radians).

| Function | Type                            |
| -------- | ------------------------------- |
| `sin`    | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers representing angles in radians.

Examples:

```js
> sin([0, Math.PI / 2, Math.PI])
[0, 1, 0]
```

### :gear: tan

Calculate the tangent of each element in an array (angle in radians).

| Function | Type                            |
| -------- | ------------------------------- |
| `tan`    | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers representing angles in radians.

Examples:

```js
> tan([0, Math.PI / 4])
[0, 1]
```

### :gear: arccos

Calculate the arccosine of each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `arccos` | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers in the range [-1, 1].

Examples:

```js
> arccos([1, 0, -1])
[0, Math.PI / 2, Math.PI]
```

### :gear: arcsin

Calculate the arcsine of each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `arcsin` | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers in the range [-1, 1].

Examples:

```js
> arcsin([0, 1, -1])
[0, Math.PI / 2, -Math.PI / 2]
```

### :gear: arctan

Calculate the arctangent of each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `arctan` | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> arctan([0, 1, -1])
[0, Math.PI / 4, -Math.PI / 4]
```

### :gear: cosh

Calculate the hyperbolic cosine of each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `cosh`   | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> cosh([0, 1, -1])
[1, 1.543080634815244, 1.543080634815244]
```

### :gear: sinh

Calculate the hyperbolic sine of each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `sinh`   | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> sinh([0, 1, -1])
[0, 1.1752011936438014, -1.1752011936438014]
```

### :gear: tanh

Calculate the hyperbolic tangent of each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `tanh`   | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> tanh([0, 1, -1])
[0, 0.7615941559557649, -0.7615941559557649]
```

### :gear: arccosh

Calculate the hyperbolic arccosine of each element in an array.

| Function  | Type                            |
| --------- | ------------------------------- |
| `arccosh` | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers where each element is greater than or equal to 1.

Examples:

```js
> arccosh([1, 2, 3])
[0, 1.3169578969248166, 1.762747174039086]
```

### :gear: arcsinh

Calculate the hyperbolic arcsine of each element in an array.

| Function  | Type                            |
| --------- | ------------------------------- |
| `arcsinh` | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> arcsinh([0, 1, -1])
[0, 0.881373587019543, -0.881373587019543]
```

### :gear: exp

Calculate the exponential function of each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `exp`    | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> exp([0, 1, 2])
[1, 2.718281828459045, 7.38905609893065]
```

### :gear: ceil

Calculate the smallest integer greater than or equal to each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `ceil`   | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> ceil([1.2, 2.5, 3.7])
[2, 3, 4]
```

### :gear: floor

Calculate the largest integer less than or equal to each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `floor`  | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> floor([1.2, 2.5, 3.7])
[1, 2, 3]
```

### :gear: fround

Calculate the nearest single-precision float representation of each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `fround` | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> fround([1.2, 2.5, 3.7])
[1.2000000476837158, 2.5, 3.700000047683716]
```

### :gear: round

Round each element in an array to the nearest integer.

| Function | Type                            |
| -------- | ------------------------------- |
| `round`  | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> round([1.2, 2.5, 3.7])
[1, 3, 4]
```

### :gear: trunc

Truncate the decimal part of each element in an array.

| Function | Type                            |
| -------- | ------------------------------- |
| `trunc`  | `(array: number[]) => number[]` |

Parameters:

- `array`: - The array of numbers.

Examples:

```js
> trunc([1.2, 2.5, 3.7])
[1, 2, 3]
```

## :wrench: Constants

- [pi](#gear-pi)
- [e](#gear-e)

### :gear: pi

Constant representing the mathematical constant Pi (π).

| Constant | Type     |
| -------- | -------- |
| `pi`     | `number` |

### :gear: e

Constant representing the Euler's number (e).

| Constant | Type     |
| -------- | -------- |
| `e`      | `number` |
