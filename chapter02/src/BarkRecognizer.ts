import { DogDoor } from "./DogDoor";
export type BarkRecognizer = InstanceType<typeof BarkRecognizer>;
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
