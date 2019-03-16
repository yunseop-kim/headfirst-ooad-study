import { Guitar } from "./Guitar";
import { Type } from "./types/Type";
import { Wood } from "./types/Wood";
import { Builder } from "./types/Builder";
export type Inventory = InstanceType<typeof Inventory>;
export const Inventory = class {
  private _guitars: Guitar[];
  constructor() {
    this._guitars = new Array<Guitar>();
    // this._guitars = [];
  }
  addGuitar(
    serialNumber: string,
    price: number,
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ): void {
    const guitar: Guitar = new Guitar(
      serialNumber,
      price,
      builder,
      model,
      type,
      backWood,
      topWood
    );
    this._guitars.push(guitar);
  }
  getGuitar(serialNumber: string): Guitar {
    return this._guitars.filter(
      (item: Guitar): boolean => item.serialNumber == serialNumber
    )[0];
  }
  search(searchGuitar: Guitar): Guitar[] {
    const {
      builder: tBuilder,
      model: tModel,
      type: tType,
      backWood: tBackWood,
      topWood: tTopWood
    } = searchGuitar;
    return this._guitars.filter(
      (item: Guitar): boolean => {
        const { builder, model, type, backWood, topWood } = item;
        return (
          builder &&
          builder == tBuilder &&
          (model && model.toLowerCase() == tModel.toLowerCase()) &&
          (type && type == tType) &&
          (backWood && backWood == tBackWood) &&
          (topWood && topWood == tTopWood)
        );
      }
    );
  }
};
