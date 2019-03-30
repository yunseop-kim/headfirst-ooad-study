import { Builder } from "./types/Builder";
import { Type } from "./types/Type";
import { Wood } from "./types/Wood";
import { InstrumentSpec } from "./InstrumentSpec";
import { Style } from "./Style";
export class MandolinSpec extends InstrumentSpec {
  private _style: Style;

  constructor(
    builder: Builder,
    model: string,
    type: Type,
    style: Style,
    backWood: Wood,
    topWood: Wood
  ) {
    super(builder, model, type, backWood, topWood);
    this._style = style;
  }

  get style(): Style {
    return this._style;
  }

  public matches(otherSpec: InstrumentSpec): boolean {
    if (!super.matches(otherSpec)) return false;
    if (!(otherSpec instanceof MandolinSpec)) return false;
    const spec: MandolinSpec = otherSpec as MandolinSpec;
    if (this.style !== spec.style) return false;
    return true;
  }
}
