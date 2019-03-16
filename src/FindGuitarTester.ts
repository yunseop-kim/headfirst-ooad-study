import { Inventory } from "./Inventory";
import { Guitar } from "./Guitar";
import { Builder } from "./types/Builder";
import { Type } from "./types/Type";
import { Wood } from "./types/Wood";
const FindGuitarTester = class {
  public main(): void {
    const inventory: Inventory = new Inventory();
    this.initInventory(inventory);

    const whatErinLikes: Guitar = new Guitar(
      "",
      0,
      Builder.FENDER,
      "Stratocastor",
      Type.ELECTRIC,
      Wood.ALDER,
      Wood.ALDER
    );
    const guitar: Guitar = inventory.search(whatErinLikes);
    if (guitar) {
      const { builder, model, type, backWood, topWood, price } = guitar;
      console.log(`Erin, you might like this ${builder} ${model} ${type} guitar:
          ${backWood} back and sides,
          ${topWood} top.
          You can have it for only ${price}!`);
    } else {
      console.log("Sorry, Erin, we have noting for you.");
    }
  }
  private initInventory(inventory: Inventory) {
    inventory.addGuitar(
      "V95693",
      1499.95,
      "Fender",
      "Stratocastor",
      "electric",
      "Alder",
      "Alder"
    );
    inventory.addGuitar("a", 1000, "b", "c", "d", "e", "f");
    inventory.addGuitar("a1", 1000, "bsdf", "c", "d", "e", "f");
    inventory.addGuitar("a2", 1000, "bsdf", "c", "d", "e", "f");
    inventory.addGuitar("a3", 1000, "bsdf", "c", "d", "e", "f");
    inventory.addGuitar("a4", 1000, "bsdf", "c", "d", "e", "f");
  }
};

new FindGuitarTester().main();
