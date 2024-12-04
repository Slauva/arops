"use strict";
import type { DType } from "./dtype";
import { copy as deepcopy } from "../utils";
import { ValueError, IndexError } from "../error";

type MArray<T> = T[] | MArray<T>[];

class NDarray {
  private section: MArray<number> = [];
  private p_shape: number[] = [];
  private p_ndim: number = 0;
  private p_dtype: DType | undefined = undefined;

  constructor(
    obj: MArray<number>,
    dtype: DType | undefined = undefined,
    copy: boolean = true,
  ) {
    const t_shape = this.get_shape(obj);
    if (!Array.isArray(t_shape)) {
      throw new ValueError(
        "setting an array element with a sequence. The requested array has an inhomogeneous shape.",
      );
    } else {
      this.p_shape = t_shape;
      this.p_ndim = t_shape.length;
    }

    if (copy) {
      this.section = deepcopy(obj);
    } else {
      this.section = obj;
    }

    if (dtype !== undefined) {
      this.p_astype(this.section, dtype);
      this.p_dtype = dtype;
    }
  }

  private get_shape(x: any): number[] | boolean {
    if (!x.length) return [];

    const isEqual = (a: any, b: any) => {
      if (Array.isArray(a) && Array.isArray(b))
        return a.length === b.length && a.every((v, i) => v === b[i]);
      return false;
    };

    const dim = x.reduce((res: number | number[], cur: number | number[]) => {
      return isEqual(res, this.get_shape(cur)) ? res : false;
    }, this.get_shape(x[0]));

    return Array.isArray(dim) ? [x.length].concat(dim) : false;
  }

  get shape() {
    return this.p_shape;
  }

  get ndim() {
    return this.p_ndim;
  }

  private p_astype(x: MArray<number>, dt: DType) {
    if (Array.isArray(x[0])) {
      x.forEach((v) => {
        this.p_astype(v as MArray<number>, dt);
      });
    } else {
      // @ts-ignore
      for (let i = 0; i < x.length; i++) x[i] = new dt([x[i]])[0];
    }
  }

  public astype(dtype: DType): NDarray {
    return new NDarray(this.section, dtype, true);
  }

  private parse_query(query: string) {
    const pattern = /(?<from>\d+)|(?<sep>\:)|(?<to>(?:-)\d+)/g;
    const queries = query.split(",");
    return queries
      .map((q) => {
        const names = q.match(pattern);

        if (names?.length === 1) {
          if (names[0] === ":") {
            return {
              start: 0,
              end: null,
            };
          } else {
            return {
              index: parseInt(names[0]),
            };
          }
        }

        if (names?.length === 2) {
          if (names[0] === ":") {
            return {
              start: 0,
              end: parseInt(names[1]),
            };
          } else {
            return {
              start: parseInt(names[0]),
              end: null,
            };
          }
        }

        if (names?.length === 3) {
          return {
            start: parseInt(names[0]),
            end: parseInt(names[2]),
          };
        }

        return undefined;
      })
      .filter((v) => v !== undefined);
  }

  public get(query: string): NDarray {
    const queries = query.split(",");
    if (queries.length > this.p_ndim) {
      throw new IndexError(
        `too many indices for array: array is ${this.p_ndim}-dimensional, but ${queries.length} were indexed`,
      );
    }
    const slices = this.parse_query(query);

    const applySlice = (
      subArray: MArray<number>,
      queryParts: ReturnType<typeof this.parse_query>,
      dimension: number,
    ): MArray<number> => {
      if (!Array.isArray(subArray) || dimension >= queryParts.length) {
        return subArray;
      }

      const part = queryParts[dimension];
      let slicedArray: MArray<number>;

      if (part?.index === undefined && part?.start !== undefined) {
        slicedArray = subArray.slice(
          part.start,
          part.end === null ? this.shape[dimension] : part.end,
        );
      } else if (part?.index !== undefined) {
        if (!(0 <= part.index && part.index < this.shape[dimension])) {
          throw new IndexError(
            `index ${part.index} is out of bounds for axis ${dimension} with size ${this.shape[dimension]}`,
          );
        }
        // @ts-ignore
        slicedArray = Array.isArray(subArray[part.index])
          ? subArray[part.index]
          : [subArray[part.index]];
      } else {
        slicedArray = [];
      }

      return slicedArray.map((sub) =>
        // @ts-ignore
        applySlice(sub, queryParts, dimension + 1),
      );
    };
    return new NDarray(applySlice(this.section, slices, 0), undefined, true);
  }

  public tolist(): MArray<number> {
    return deepcopy(this.section);
  }
}
