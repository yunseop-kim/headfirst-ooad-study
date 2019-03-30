import { Builder } from "./types/Builder";
import { Type } from "./types/Type";
import { Wood } from "./types/Wood";
import { InstrumentSpec } from "./InstrumentSpec";
export class GuitarSpec extends InstrumentSpec {
  private _numStrings: number;

  constructor(
    builder: Builder,
    model: string,
    type: Type,
    numStrings: number,
    backWood: Wood,
    topWood: Wood
  ) {
    super(builder, model, type, backWood, topWood);
    this._numStrings = numStrings;
  }

  get numStrings(): number {
    return this._numStrings;
  }

  public matches(otherSpec: InstrumentSpec): boolean {
    if (!super.matches(otherSpec)) return false;
    if (!(otherSpec instanceof GuitarSpec)) return false;
    const spec: GuitarSpec = otherSpec as GuitarSpec;
    if (this.numStrings != spec.numStrings) return false;
    return true;
  }
}
