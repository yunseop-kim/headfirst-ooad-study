import { Bark } from "./Bark";

export type DogDoor = InstanceType<typeof DogDoor>;
export const DogDoor = class {
  private _open: boolean;
  private _allowedBark: Bark;

  constructor() {
    this._open = false;
  }

  public open(): void {
    console.log("The dog door opens.");
    this._open = true;
    setTimeout(() => {
      this.close();
    }, 5000);
  }

  public close(): void {
    console.log("The dog door closes.");
    this._open = false;
  }

  public isOpen(): boolean {
    return this._open;
  }

  get allowedBark(): Bark {
    return this._allowedBark;
  }

  set allowedBark(allowedBark: Bark) {
    this._allowedBark = allowedBark;
  }
}
