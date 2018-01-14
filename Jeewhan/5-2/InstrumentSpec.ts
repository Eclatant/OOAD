export default class InstrumentSpec {
  public properties: any;

  constructor(properties: any) {
    this.properties = properties;
  }

  public matches(otherSpec: InstrumentSpec) {
    for (const key in otherSpec.properties) {
      if (otherSpec.properties[key] !== this.properties[key]) {
        return false;
      }
    }

    return true;
  }
}
