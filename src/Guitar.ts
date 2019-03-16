import { Builder } from "./types/Builder";
import { Type } from "./types/Type";
import { Wood } from "./types/Wood";
export type Guitar = InstanceType<typeof Guitar>;
export const Guitar = class {
  private _serialNumber: string;
  private _price: number;
  private _builder: Builder;
  private _model: string;
  private _type: Type;
  private _backWood: Wood;
  private _topWood: Wood;

  constructor(
    serialNumber: string,
    price: number,
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ) {
    this._serialNumber = serialNumber;
    this._price = price;
    this._builder = builder;
    this._model = model;
    this._type = type;
    this._backWood = backWood;
    this._topWood = topWood;
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

  get builder(): Builder {
    return this._builder;
  }

  get model(): string {
    return this._model;
  }

  get type(): Type {
    return this._type;
  }

  get backWood(): Wood {
    return this._backWood;
  }
  get topWood(): Wood {
    return this._topWood;
  }
};
