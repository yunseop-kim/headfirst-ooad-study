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

    const whatErinLikes: GuitarSpec = new GuitarSpec(
      Builder.FENDER,
      "Stratocastor",
      Type.ELECTRIC,
      6,
      Wood.ALDER,
      Wood.ALDER
    );

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
    inventory.addGuitar(
      "11277",
      3999.95,
      new GuitarSpec(
        Builder.COLLINGS,
        "CJ",
        Type.ACOUSTIC,
        6,
        Wood.INDIAN_ROSEWOOD,
        Wood.SITKA
      )
    );
    inventory.addGuitar(
      "V95693",
      1499.95,
      new GuitarSpec(
        Builder.FENDER,
        "Stratocastor",
        Type.ELECTRIC,
        6,
        Wood.ALDER,
        Wood.ALDER
      )
    );
    inventory.addGuitar(
      "V9512",
      1549.95,
      new GuitarSpec(
        Builder.FENDER,
        "Stratocastor",
        Type.ELECTRIC,
        6,
        Wood.ALDER,
        Wood.ALDER
      )
    );
    inventory.addGuitar(
      "122784",
      5495.95,
      new GuitarSpec(
        Builder.MARTIN,
        "D-18",
        Type.ACOUSTIC,
        6,
        Wood.MAHOGANY,
        Wood.ADIRONDACK
      )
    );
    inventory.addGuitar(
      "76531",
      6295.95,
      new GuitarSpec(
        Builder.MARTIN,
        "OM-28",
        Type.ACOUSTIC,
        6,
        Wood.BRAZILIAN_ROSEWOOD,
        Wood.ADIRONDACK
      )
    );
    inventory.addGuitar(
      "70108276",
      2295.95,
      new GuitarSpec(
        Builder.GIBSON,
        "Les Paul",
        Type.ELECTRIC,
        6,
        Wood.MAHOGANY,
        Wood.MAHOGANY
      )
    );
    inventory.addGuitar(
      "82765501",
      1890.95,
      new GuitarSpec(
        Builder.GIBSON,
        "SG '61 Reissue",
        Type.ELECTRIC,
        6,
        Wood.MAHOGANY,
        Wood.MAHOGANY
      )
    );
    inventory.addGuitar(
      "77023",
      6275.95,
      new GuitarSpec(
        Builder.MARTIN,
        "D-28",
        Type.ACOUSTIC,
        6,
        Wood.BRAZILIAN_ROSEWOOD,
        Wood.ADIRONDACK
      )
    );
    inventory.addGuitar(
      "1092",
      12995.95,
      new GuitarSpec(
        Builder.OLSON,
        "SJ",
        Type.ACOUSTIC,
        12,
        Wood.INDIAN_ROSEWOOD,
        Wood.CEDAR
      )
    );
    inventory.addGuitar(
      "566-62",
      8999.95,
      new GuitarSpec(
        Builder.RYAN,
        "Cathedral",
        Type.ACOUSTIC,
        12,
        Wood.COCOBOLO,
        Wood.CEDAR
      )
    );
    inventory.addGuitar(
      "6 29584",
      2100.95,
      new GuitarSpec(
        Builder.PRS,
        "Dave Navarro Signature",
        Type.ELECTRIC,
        6,
        Wood.MAHOGANY,
        Wood.MAPLE
      )
    );
  }
};

new FindGuitarTester().main();
