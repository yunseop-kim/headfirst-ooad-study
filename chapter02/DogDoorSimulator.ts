import { DogDoor } from "./src/DogDoor";
import { Remote } from "./src/Remote";
export class DogDoorSimulator {
  public main(): void {
    const door: DogDoor = new DogDoor();
    const remote: Remote = new Remote(door);

    console.log("Fido barks to go outside...");
    remote.pressButton();

    console.log("\nFido has gone outside...");

    console.log("\nFido's all done...");

    setTimeout(() => {}, 10000);

    console.log("...but he's stuck outside!");

    console.log("\nFido starts barking...");
    console.log("...so Gina grabs the remote control.");
    remote.pressButton();

    console.log("\nFido's back inside...");
  }
}

new DogDoorSimulator().main();
