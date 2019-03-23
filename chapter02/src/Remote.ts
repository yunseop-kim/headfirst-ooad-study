import { DogDoor } from "./DogDoor";
export type Remote = InstanceType<typeof Remote>;
export const Remote = class {
  private _door: DogDoor;
  constructor(door: DogDoor) {
    this._door = door;
  }

  public pressButton(): void {
    console.log("Pressing the remote control button...");
    if (this._door.isOpen()) {
      this._door.close();
    } else {
      this._door.open();
      setTimeout(() => {
        this._door.close();
      }, 5000);
    }
  }
};
