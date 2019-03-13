import { Inventory, IInventory } from "./Inventory";
import { Guitar, IGuitar } from "./Guitar";
const FindGuitarTester = class {
  private initInventory(inventory: IInventory) {
    inventory.addGuitar(
      "",
      0,
      "fender",
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
  public main(): void {
    const inventory: IInventory = new Inventory();
    this.initInventory(inventory);

    const whatErinLikes: IGuitar = new Guitar(
      "",
      0,
      "fender",
      "Stratocastor",
      "electric",
      "Alder",
      "Alder"
    );
    const guitar: IGuitar = inventory.search(whatErinLikes);
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
};

new FindGuitarTester().main();
