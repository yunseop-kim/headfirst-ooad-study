import { Builder } from "./types/Builder";
import { Type } from "./types/Type";
import { Wood } from "./types/Wood";
export type GuitarSpec = InstanceType<typeof GuitarSpec>;
export const GuitarSpec = class {
  private _builder: Builder;
  private _model: string;
  private _type: Type;
  private _backWood: Wood;
  private _topWood: Wood;
  private _numStrings: number;

  constructor(
    builder: Builder,
    model: string,
    type: Type,
    numStrings: number,
    backWood: Wood,
    topWood: Wood
  ) {
    this._builder = builder;
    this._model = model;
    this._type = type;
    this._backWood = backWood;
    this._topWood = topWood;
    this._numStrings = numStrings;
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

  get numStrings(): number {
    return this._numStrings;
  }

  public matches(otherSpec: GuitarSpec): boolean {
    const { builder, model, type, backWood, topWood, numStrings } = this;
    const {
      builder: otherBuilder,
      model: otherModel,
      type: otherType,
      backWood: otherBackWood,
      topWood: otherTopWood,
      numStrings: otherNumStrings
    } = otherSpec;
    if (builder !== otherBuilder) return false;
    if (model && model !== otherModel) return false;
    if (type !== otherType) return false;
    if (backWood !== otherBackWood) return false;
    if (topWood !== otherTopWood) return false;
    if (numStrings !== otherNumStrings) return false;
    return true;
  }
};
