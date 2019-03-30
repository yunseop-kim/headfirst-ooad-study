import { Guitar } from "./Guitar";
import { GuitarSpec } from "./GuitarSpec";
import { InstrumentSpec } from "./InstrumentSpec";
import { Instrument } from "./Instrument";
import { MandolinSpec } from "./MandolinSpec";
import { Mandolin } from "./Mandolin";
export type Inventory = InstanceType<typeof Inventory>;
export const Inventory = class {
  private _inventory: any[];
  constructor() {
    this._inventory = new Array<Guitar>();
  }
  addInstrument(
    serialNumber: string,
    price: number,
    spec: InstrumentSpec
  ): void {
    let instrument: Instrument = null;
    if (spec instanceof GuitarSpec) {
      instrument = new Guitar(serialNumber, price, spec as GuitarSpec);
    } else if (spec instanceof MandolinSpec) {
      instrument = new Mandolin(serialNumber, price, spec as MandolinSpec);
    }
    this._inventory.push(instrument);
  }
  public get(serialNumber: string): Instrument {
    return this._inventory.filter(
      (item: Instrument): boolean => item.serialNumber == serialNumber
    )[0];
  }
  public search(searchSpec: GuitarSpec | MandolinSpec): Guitar[] | Mandolin[] {
    return this._inventory.filter(
      (item: Guitar | Mandolin): boolean => {
        return searchSpec.matches(item.spec);
      }
    );
  }
};
