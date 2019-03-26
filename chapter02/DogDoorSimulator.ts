import { DogDoor } from "./src/DogDoor";
import { Remote } from "./src/Remote";
import { BarkRecognizer } from "./src/BarkRecognizer";
export class DogDoorSimulator {
  public main(): void {
    const door: DogDoor = new DogDoor();
    const recognizer: BarkRecognizer = new BarkRecognizer(door);
    const remote: Remote = new Remote(door);

    console.log("Fido barks to go outside...");
    recognizer.recognize("Woof");

    console.log("\nFido has gone outside...");
    console.log("\nFido's all done...");

    setTimeout(() => {
      console.log("...but he's stuck outside!");

      console.log("\nFido starts barking...");
      recognizer.recognize("Woof");

      console.log("\nFido's back inside...");
    }, 10000);
  }
}

new DogDoorSimulator().main();
