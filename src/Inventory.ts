import { Guitar } from "./Guitar";
import { GuitarSpec } from "./GuitarSpec";
export type Inventory = InstanceType<typeof Inventory>;
export const Inventory = class {
  private _guitars: Guitar[];
  constructor() {
    this._guitars = new Array<Guitar>();
    // this._guitars = [];
  }
  addGuitar(serialNumber: string, price: number, spec: GuitarSpec): void {
    const guitar: Guitar = new Guitar(serialNumber, price, spec);
    this._guitars.push(guitar);
  }
  getGuitar(serialNumber: string): Guitar {
    return this._guitars.filter(
      (item: Guitar): boolean => item.serialNumber == serialNumber
    )[0];
  }
  search(searchSpec: GuitarSpec): Guitar[] {
    return this._guitars.filter(
      (item: Guitar): boolean => {
        return searchSpec.matches(item.spec);
      }
    );
  }
};
