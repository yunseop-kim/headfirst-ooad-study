import { MandolinSpec } from "./MandolinSpec";
import { Instrument } from "./Instrument";
export type Mandolin = InstanceType<typeof Mandolin>;
export const Mandolin = class extends Instrument {
  constructor(serialNumber: string, price: number, spec: MandolinSpec) {
    super(serialNumber, price, spec);
  }
};
