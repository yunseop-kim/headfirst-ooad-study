import { GuitarSpec } from "./GuitarSpec";
import { Instrument } from "./Instrument";
export type Guitar = InstanceType<typeof Guitar>;
export const Guitar = class extends Instrument {
  constructor(serialNumber: string, price: number, spec: GuitarSpec) {
    super(serialNumber, price, spec);
  }
};
