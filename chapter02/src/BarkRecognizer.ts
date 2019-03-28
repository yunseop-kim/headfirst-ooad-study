import { DogDoor } from "./DogDoor";
import { Bark } from "./Bark";
export type BarkRecognizer = InstanceType<typeof BarkRecognizer>;
export const BarkRecognizer = class {
  private _door: DogDoor;
  constructor(dogDoor: DogDoor) {
    this._door = dogDoor;
  }
  public recognize(bark: Bark): void {
    console.log(`BarkRecognizer: Heard a ${bark.sound}`);
    if (this._door.allowedBark.equals(bark)) {
      this._door.open();
    } else {
      console.log("this dog is not allowed.")
    }
  }
};
