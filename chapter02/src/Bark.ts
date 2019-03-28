export class Bark {
    private _sound: string;
    constructor(sound: string) {
        this._sound = sound;
    }

    get sound(): string {
        return this._sound
    }

    public equals(bark: Object): boolean {
        if (bark instanceof Bark) {
            const otherBark: Bark = bark;
            return this.sound === bark.sound;
        }
        return false;
    }
}