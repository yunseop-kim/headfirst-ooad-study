import { Builder } from "./types/Builder";
import { Type } from "./types/Type";
import { Wood } from "./types/Wood";
export abstract class InstrumentSpec {
  private _builder: Builder;
  private _model: string;
  private _type: Type;
  private _backWood: Wood;
  private _topWood: Wood;

  constructor(
    builder: Builder,
    model: string,
    type: Type,
    backWood: Wood,
    topWood: Wood
  ) {
    this._builder = builder;
    this._model = model;
    this._type = type;
    this._backWood = backWood;
    this._topWood = topWood;
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

  public matches(otherSpec: InstrumentSpec): boolean {
    const { builder, model, type, backWood, topWood } = this;
    const {
      builder: otherBuilder,
      model: otherModel,
      type: otherType,
      backWood: otherBackWood,
      topWood: otherTopWood
    } = otherSpec;
    if (builder !== otherBuilder) return false;
    if (model && model !== otherModel) return false;
    if (type !== otherType) return false;
    if (backWood !== otherBackWood) return false;
    if (topWood !== otherTopWood) return false;
    return true;
  }
}
