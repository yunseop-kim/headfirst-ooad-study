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
    this._door.allowedBarks.forEach((allowedBark: Bark) => {
      if (allowedBark.equals(bark)) {
        this._door.open();
      }
    });
  }
};
