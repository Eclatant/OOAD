import InstrumentSpec from "./InstrumentSpec";

export default class Instrument {
  public serialNumber: string;
  public price: number;
  public instrumentSpec: InstrumentSpec;

  constructor(
    serialNumber: string,
    price: number,
    instrumentSpec: InstrumentSpec
  ) {
    this.serialNumber = serialNumber;
    this.price = price;
    this.instrumentSpec = instrumentSpec;
  }

  set setPrice(newPrice: number) {
    this.price = newPrice;
  }
}
