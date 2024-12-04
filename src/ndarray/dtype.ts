"use strict";

const dtypes = {
  int8: Int8Array,
  uint8: Uint8Array,
  uint8c: Uint8ClampedArray,
  int16: Int16Array,
  uint16: Uint16Array,
  int32: Int32Array,
  uint32: Uint32Array,
  int64: BigInt64Array,
  uint64: BigUint64Array,
  float32: Float32Array,
  float64: Float64Array,
  array: Array,
};

export type DType = (typeof dtypes)[keyof typeof dtypes];

export default { ...dtypes };
