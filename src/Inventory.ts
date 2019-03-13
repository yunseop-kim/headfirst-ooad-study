import { IGuitar, Guitar } from "./Guitar";

export interface IInventory {
  addGuitar(
    serialNumber: string,
    price: number,
    builder: string,
    model: string,
    type: string,
    backWood: string,
    topWood: string
  ): void;
  getGuitar(serialNumber: string): IGuitar;
  search(searchGuitar: IGuitar): IGuitar;
}

export const Inventory = class implements IInventory {
  private _guitars: IGuitar[];
  constructor() {
    // this._guitars = new Array<IGuitar>();
    this._guitars = [];
  }
  addGuitar(
    serialNumber: string,
    price: number,
    builder: string,
    model: string,
    type: string,
    backWood: string,
    topWood: string
  ): void {
    const guitar: IGuitar = new Guitar(
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
  getGuitar(serialNumber: string): IGuitar {
    return this._guitars.filter(
      (item: IGuitar): boolean => item.serialNumber == serialNumber
    )[0];
  }
  search(searchGuitar: IGuitar): IGuitar {
    const {
      builder: tBuilder,
      model: tModel,
      type: tType,
      backWood: tBackWood,
      topWood: tTopWood
    } = searchGuitar;
    return this._guitars.filter(
      (item: IGuitar): boolean => {
        const { builder, model, type, backWood, topWood } = item;
        return (
          builder &&
          builder == tBuilder &&
          (model && model == tModel) &&
          (type && type == tType) &&
          (backWood && backWood == tBackWood) &&
          (topWood && topWood == tTopWood)
        );
      }
    )[0];
  }
};
