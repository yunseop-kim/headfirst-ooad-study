export class InstrumentSpec {
  private _properties: Map<any, any>;

  constructor(properties: Map<any, any>) {
    if (properties == null) {
      this._properties = new Map();
    } else {
      this._properties = new Map(properties);
    }
  }

  public getProperty(propertyName: string) {
    return this._properties.get(propertyName);
  }

  public get properties(): Map<any, any> {
    return this._properties;
  }

  public matches(otherSpec: InstrumentSpec): boolean {
    for (var [key, value] of otherSpec.properties.entries()) {
      if (this.properties.get(key) == value) {
        return true;
      }
    }
    return false;
  }
}
