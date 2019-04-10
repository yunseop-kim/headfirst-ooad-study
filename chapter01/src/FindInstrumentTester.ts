import { Inventory } from "./Inventory";
import { Builder } from "./types/Builder";
import { Wood } from "./types/Wood";
import { InstrumentSpec } from "./InstrumentSpec";
import { Instrument } from "./Instrument";
import { InstrumentType } from "./types/InstrumentType";
import { Type } from "./types/Type";
export class FindInstrumentTester {
  public main(): void {
    // Set up Rick's inventory
    const inventory: Inventory = new Inventory();
    this.initializeInventory(inventory);

    const properties: Map<any, any> = new Map();
    properties.set("builder", Builder.GIBSON);
    properties.set("backWood", Wood.MAPLE);
    const whatBryanLikes: InstrumentSpec = new InstrumentSpec(properties);

    const matchingInstruments: Instrument[] = inventory.search(whatBryanLikes);
    if (matchingInstruments) {
      console.log("Bryan, you might like these instruments:");
      matchingInstruments.forEach((instrument: Instrument) => {
        console.log(
          `We have a ${instrument.spec.getProperty(
            `instrumentType`
          )} with the following properties:`
        );
        instrument.spec.properties.forEach((value, key) => {
          console.log(`    ${key}: ${value}`);
        });
        console.log(
          `  You can have this ${instrument.spec.getProperty(
            `instrumentType`
          )} for $${instrument.price}\n---`
        );
      });
    } else {
      console.log("Sorry, Bryan, we have nothing for you.");
    }
  }

  private initializeInventory(inventory: Inventory): void {
    const properties: Map<any, any> = new Map();
    properties.set("instrumentType", InstrumentType.GUITAR);
    properties.set("builder", Builder.COLLINGS);
    properties.set("model", "CJ");
    properties.set("type", Type.ACOUSTIC);
    properties.set("numStrings", 6);
    properties.set("topWood", Wood.INDIAN_ROSEWOOD);
    properties.set("backWood", Wood.SITKA);
    inventory.addInstrument("11277", 3999.95, new InstrumentSpec(properties));

    properties.set("builder", Builder.MARTIN);
    properties.set("model", "D-18");
    properties.set("topWood", Wood.MAHOGANY);
    properties.set("backWood", Wood.ADIRONDACK);
    inventory.addInstrument("122784", 5495.95, new InstrumentSpec(properties));

    properties.set("builder", Builder.FENDER);
    properties.set("model", "Stratocastor");
    properties.set("type", Type.ELECTRIC);
    properties.set("topWood", Wood.ALDER);
    properties.set("backWood", Wood.ALDER);
    inventory.addInstrument("V95693", 1499.95, new InstrumentSpec(properties));
    inventory.addInstrument("V9512", 1549.95, new InstrumentSpec(properties));

    properties.set("builder", Builder.GIBSON);
    properties.set("model", "Les Paul");
    properties.set("topWood", Wood.MAPLE);
    properties.set("backWood", Wood.MAPLE);
    inventory.addInstrument(
      "70108276",
      2295.95,
      new InstrumentSpec(properties)
    );

    properties.set("model", "SG '61 Reissue");
    properties.set("topWood", Wood.MAHOGANY);
    properties.set("backWood", Wood.MAHOGANY);
    inventory.addInstrument(
      "82765501",
      1890.95,
      new InstrumentSpec(properties)
    );

    properties.set("instrumentType", InstrumentType.MANDOLIN);
    properties.set("type", Type.ACOUSTIC);
    properties.set("model", "F-5G");
    properties.set("backWood", Wood.MAPLE);
    properties.set("topWood", Wood.MAPLE);
    properties.delete("numStrings");
    inventory.addInstrument("9019920", 5495.99, new InstrumentSpec(properties));

    properties.set("instrumentType", InstrumentType.BANJO);
    properties.set("model", "RB-3 Wreath");
    properties.delete("topWood");
    properties.set("numStrings", 5);
    inventory.addInstrument("8900231", 2945.95, new InstrumentSpec(properties));
  }
}

new FindInstrumentTester().main()