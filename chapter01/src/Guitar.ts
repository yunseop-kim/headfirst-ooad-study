import { GuitarSpec } from "./GuitarSpec";

export type Guitar = InstanceType<typeof Guitar>;
export const Guitar = class {
  private _serialNumber: string;
  private _price: number;
  private _spec: GuitarSpec

  constructor(
    serialNumber: string,
    price: number,
    spec: GuitarSpec
  ) {
    this._serialNumber = serialNumber;
    this._price = price;
    this._spec = spec;
  }

  get serialNumber(): string {
    return this._serialNumber;
  }

  get price(): number {
    return this._price;
  }

  set price(val: number) {
    this._price = val;
  }

  get spec(): GuitarSpec {
    return this._spec
  }
};
