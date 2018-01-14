import Instrument from "./Instrument";
import InstrumentSpec from "./InstrumentSpec";

export default class Inventory {
  public list: Instrument[];

  constructor() {
    this.list = [];
  }

  public addInstrument(
    serialNumber: string,
    price: number,
    instrumentSpec: InstrumentSpec
  ): void {
    this.list.push(new Instrument(serialNumber, price, instrumentSpec));
  }

  public get(serialNumber: string): Instrument {
    let result: Instrument;

    // https://blog.outsider.ne.kr/847
    this.list.some(v => {
      if (v.serialNumber === serialNumber) {
        result = v;
      }
      return v.serialNumber === serialNumber;
    });

    return result;
  }

  public search(searchSpec: InstrumentSpec): Instrument[] {
    return this.list.filter(v => {
      return v.instrumentSpec.matches(searchSpec);
    });
  }
}
