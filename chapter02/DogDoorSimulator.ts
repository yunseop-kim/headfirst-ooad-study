import { DogDoor } from "./src/DogDoor";
import { Remote } from "./src/Remote";
import { BarkRecognizer } from "./src/BarkRecognizer";
import { Bark } from "./src/Bark";
export class DogDoorSimulator {
  public main(): void {
    const door: DogDoor = new DogDoor();
    door.addAllowedBark(new Bark("rowlf"));
    door.addAllowedBark(new Bark("roowlf"));
    door.addAllowedBark(new Bark("rawlf"));
    door.addAllowedBark(new Bark("roof"));
    const recognizer: BarkRecognizer = new BarkRecognizer(door);
    const remote: Remote = new Remote(door);

    console.log("Fido barks to go outside...");
    recognizer.recognize(new Bark("rowlf"));

    console.log("\nFido has gone outside...");
    
    setTimeout(() => {
      console.log("\nFido's all done...");
      console.log("...but he's stuck outside!");

      const smallDogBark: Bark = new Bark("yip");
      console.log("A small dog starts barking...");
      recognizer.recognize(smallDogBark);
      
      setTimeout(() => {
        console.log("\nFido starts barking...");
        recognizer.recognize(new Bark("roowlf"));
        console.log("\nFido's back inside...");
      }, 5000)
    }, 10000);
  }
}

new DogDoorSimulator().main();
