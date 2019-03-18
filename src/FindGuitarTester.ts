import { Inventory } from "./Inventory";
import { Guitar } from "./Guitar";
import { Builder } from "./types/Builder";
import { Type } from "./types/Type";
import { Wood } from "./types/Wood";
import { GuitarSpec } from "./GuitarSpec";
const FindGuitarTester = class {
  public main(): void {
    const inventory: Inventory = new Inventory();
    this.initInventory(inventory);

    const whatErinLikes: GuitarSpec = new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
    const guitars: Guitar[] = inventory.search(whatErinLikes);
    if (guitars.length > 0) {
      guitars.forEach((guitar: Guitar) => {
        const { builder, model, type, backWood, topWood } = guitar.spec;
        console.log(`Erin, you might like this ${builder} ${model} ${type} guitar:
                ${backWood} back and sides,
                ${topWood} top.
                You can have it for only ${guitar.price}!`);
      });
    } else {
      console.log("Sorry, Erin, we have noting for you.");
    }
  }
  private initInventory(inventory: Inventory) {
    inventory.addGuitar("V95693", 1499.95, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
    inventory.addGuitar("V9512", 1599.95, Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
    inventory.addGuitar("a", 1000, Builder.COLLINGS, "c", Type.ELECTRIC, Wood.ALDER, Wood.BRAZILIAN_ROSEWOOD);
    inventory.addGuitar("a1", 1000, Builder.FENDER, "c", Type.ACOUSTIC, Wood.ALDER, Wood.BRAZILIAN_ROSEWOOD);
    inventory.addGuitar("a2", 1000, Builder.GIBSON, "c", Type.ACOUSTIC, Wood.ALDER, Wood.BRAZILIAN_ROSEWOOD);
    inventory.addGuitar("a3", 1000, Builder.MARTIN, "c", Type.ACOUSTIC, Wood.ALDER, Wood.BRAZILIAN_ROSEWOOD);
    inventory.addGuitar("a4", 1000, Builder.OLSON, "c", Type.ELECTRIC, Wood.ALDER, Wood.BRAZILIAN_ROSEWOOD);
  }
};

new FindGuitarTester().main();
