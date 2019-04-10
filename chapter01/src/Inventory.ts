import { InstrumentSpec } from "./InstrumentSpec";
import { Instrument } from "./Instrument";
export type Inventory = InstanceType<typeof Inventory>;
export const Inventory = class {
  private _inventory: any[];
  constructor() {
    this._inventory = new Array<Instrument>();
  }
  addInstrument(
    serialNumber: string,
    price: number,
    spec: InstrumentSpec
  ): void {
    let instrument: Instrument = new Instrument(serialNumber, price, spec);
    this._inventory.push(instrument);
  }
  public get(serialNumber: string): Instrument {
    return this._inventory.filter(
      (item: Instrument): boolean => item.serialNumber == serialNumber
    )[0];
  }
  public search(searchSpec: InstrumentSpec): Instrument[] {
    return this._inventory.filter(
      (item: Instrument): boolean => searchSpec.matches(item.spec)
    );
  }
};
