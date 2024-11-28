## :toolbox: Functions

- [less](#gear-less)
- [greater](#gear-greater)
- [equal](#gear-equal)
- [all](#gear-all)
- [some](#gear-some)
- [ls](#gear-ls)
- [condition](#gear-condition)

### :gear: less

Returns an array indicating whether each element of the input array is less than or
equal to a given value (if `eq` is true) or strictly less than the value (if `eq` is false).

| Function | Type                                                          |
| -------- | ------------------------------------------------------------- |
| `less`   | `(array: Number[], value: Number, eq?: Boolean) => Boolean[]` |

Parameters:

- `array`: - The array of numbers to be compared.
- `value`: - The value each element of the array is compared against.
- `eq`: - A boolean indicating if the comparison should be
  less than or equal to (`true`), or strictly less than (`false`).

Examples:

> less([1, 2, 3, 4], 3)
> [true, true, false, false]

> less([1, 2, 3, 4], 3, true)
> [true, true, true, false]

### :gear: greater

Returns an array indicating whether each element of the input array is greater than or
equal to a given value (if `eq` is true) or strictly greater than the value (if `eq` is false).

| Function  | Type                                                          |
| --------- | ------------------------------------------------------------- |
| `greater` | `(array: Number[], value: Number, eq?: Boolean) => Boolean[]` |

Parameters:

- `array`: - The array of numbers to be compared.
- `value`: - The value each element of the array is compared against.
- `eq`: - A boolean indicating if the comparison should be
  greater than or equal to (`true`), or strictly greater than (`false`).

Examples:

> greater([1, 2, 3, 4], 3)
> [false, false, false, true]

> greater([1, 2, 3, 4], 3, true)
> [false, false, true, true]

### :gear: equal

Returns an array indicating whether each element of the input array is equal to a given value.

| Function | Type                                            |
| -------- | ----------------------------------------------- |
| `equal`  | `(array: Number[], value: Number) => Boolean[]` |

Parameters:

- `array`: - The array of numbers to be compared.
- `value`: - The value each element of the array is compared against.

Examples:

> equal([1, 2, 1, 3], 1)
> [true, false, true, false]

### :gear: all

Checks if all elements in the input array are `true`.

| Function | Type                            |
| -------- | ------------------------------- |
| `all`    | `(array: Boolean[]) => Boolean` |

Parameters:

- `array`: - The array of booleans to be evaluated.

Examples:

> all([true, true, true])
> true

> some([false, true, true])
> false

### :gear: some

Checks if at least one element in the input array is `true`.

| Function | Type                            |
| -------- | ------------------------------- |
| `some`   | `(array: Boolean[]) => Boolean` |

Parameters:

- `array`: - The array of booleans to be evaluated.

Examples:

> some([true, false, false])
> true

> some([false, false, false])
> false

### :gear: ls

| Function | Type                                            |
| -------- | ----------------------------------------------- |
| `ls`     | `(array: Number[], value: Number) => Boolean[]` |

### :gear: condition

Evaluates a set of conditions over an array of numbers, returning an array of booleans indicating
whether each element in the input array satisfies all specified conditions.

The condition string should have the format `{value/x} {expression} {x/value}`, where
`value` should to be number value, and expression like token: ">" | ">=" | "<" | "<=" | "=".

The `conditions` are parsed using the `parseCondition` function and each parsed condition is evaluated
using the corresponding function in `expr`.

It supports conditions where 'x' denotes the variable and the `expression` determines
the comparison to either side.

| Function    | Type                                                 |
| ----------- | ---------------------------------------------------- |
| `condition` | `(array: Number[], conditions: string) => Boolean[]` |

Parameters:

- `array`: - The array of numbers to evaluate against the conditions.
- `conditions`: - A comma-separated string containing conditions to evaluate.

Examples:

> const out = condition([0, 1, 2, 3], "1 <= x, x < 3")
> console.log(out)
> [false, true, true, false]
