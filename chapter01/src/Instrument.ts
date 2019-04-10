import { InstrumentSpec } from "./InstrumentSpec";

export class Instrument {
  private _serialNumber: string;
  private _price: number;
  private _spec: InstrumentSpec;
  constructor(serialNumber: string, price: number, spec: InstrumentSpec) {
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
  set price(value: number) {
    this._price = value;
  }
  get spec(): InstrumentSpec {
    return this._spec;
  }
}
