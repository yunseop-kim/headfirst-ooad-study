import { DogDoor } from "./DogDoor";
export const BarkRecognizer = class {
  private _door: DogDoor;
  constructor(dogDoor: DogDoor) {
    this._door = dogDoor;
  }
  public recognize(bark: string): void {
    console.log(`BarkRecognizer: Heard a ${bark}`);
    this._door.open();
  }
};
