export type DogDoor = InstanceType<typeof DogDoor>;
export const DogDoor = class {
  private _open: boolean;

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
};
