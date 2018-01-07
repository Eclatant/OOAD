export class Inventory {
  inventory: Instrument[];

  constructor() {
    this.inventory = [];
  }

  public addInstrument(
    serialNumber: string,
    price: number,
    instrumentSpec: InstrumentSpec
  ): void {
    this.inventory.push(new Instrument(serialNumber, price, instrumentSpec));
  }

  public get(serialNumber: string): Instrument {
    let result: Instrument;

    // https://blog.outsider.ne.kr/847
    this.inventory.some(v => {
      if (v.serialNumber === serialNumber) result = v;
      return v.serialNumber === serialNumber;
    });

    return result;

    // return this.inventory.filter(v => v === serialNumber)[0];
  }

  public search(searchSpec: InstrumentSpec): Instrument[] {
    return this.inventory.filter(v => v.instrumentSpec.matches(searchSpec));
  }
}

export class Instrument {
  serialNumber: string;
  price: number;
  instrumentSpec: InstrumentSpec;

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

export class InstrumentSpec {
  properties: Map<string, string | number>;

  constructor(properties: Map<string, string | number>) {
    this.properties = properties;
  }

  matches(otherSpec: InstrumentSpec) {
    for (const key of otherSpec.properties.keys()) {
      if (otherSpec.properties.get(key) !== this.properties.get(key))
        return false;
    }

    return true;
  }
}

export enum InstrumentType {
  GUITAR = "Guitar",
  BANJO = "Banjo",
  DOBRO = "Dobro",
  FIDDLE = "Fiddle",
  BASS = "Bass",
  MANDOLIN = "Mandolin"
}

export enum Builder {
  FENDER = "Fender",
  MARTIN = "Martin",
  GIBSON = "Gibson",
  COLLINGS = "Collings",
  OLSON = "Olson",
  RYAN = "Ryan",
  PRS = "PRS"
}

export enum Type {
  ACOUSTIC = "acoustic",
  ELECTRIC = "electric"
}

export enum Wood {
  INDIAN_ROSEWOOD = "Indian Rosewood",
  BRAZILIAN_ROSEWOOD = "Brazilian Rosewood",
  MAHOGANY = "Mahogany",
  MAPLE = "Maple",
  COCOBOLO = "Cocobolo",
  CEDAR = "Cedar",
  ADIRONDACK = "Adirondack",
  ALDER = "Alder",
  SITKA = "Sitka"
}

export enum Style {
  A = "A style",
  F = "F style"
}

export function initializeInventory(inventory: Inventory) {
  const properties = new Map();
  properties.set("instrumentType", InstrumentType.GUITAR);
  properties.set("builder", Builder.COLLINGS);
  properties.set("model", "CJ");
  properties.set("type", Type.ACOUSTIC);
  properties.set("numStrings", 6);
  properties.set("topWood", Wood.INDIAN_ROSEWOOD);
  properties.set("backWood", Wood.SITKA);
  inventory.addInstrument("11277", 3999.95, new InstrumentSpec(properties));

  properties.set("builder", Builder.MARTIN);
  properties.set("model", "D-18");
  properties.set("topWood", Wood.MAHOGANY);
  properties.set("backWood", Wood.ADIRONDACK);
  inventory.addInstrument("122784", 5495.95, new InstrumentSpec(properties));

  properties.set("builder", Builder.FENDER);
  properties.set("model", "Stratocastor");
  properties.set("type", Type.ELECTRIC);
  properties.set("topWood", Wood.ALDER);
  properties.set("backWood", Wood.ALDER);
  inventory.addInstrument("V95693", 1499.95, new InstrumentSpec(properties));
  inventory.addInstrument("V9512", 1549.95, new InstrumentSpec(properties));

  properties.set("builder", Builder.GIBSON);
  properties.set("model", "Les Paul");
  properties.set("topWood", Wood.MAPLE);
  properties.set("backWood", Wood.MAPLE);
  inventory.addInstrument("70108276", 2295.95, new InstrumentSpec(properties));

  properties.set("model", "SG '61 Reissue");
  properties.set("topWood", Wood.MAHOGANY);
  properties.set("backWood", Wood.MAHOGANY);
  inventory.addInstrument("82765501", 1890.95, new InstrumentSpec(properties));

  properties.set("instrumentType", InstrumentType.MANDOLIN);
  properties.set("type", Type.ACOUSTIC);
  properties.set("model", "F-5G");
  properties.set("backWood", Wood.MAPLE);
  properties.set("topWood", Wood.MAPLE);
  properties.delete("numStrings");
  inventory.addInstrument("9019920", 5495.99, new InstrumentSpec(properties));

  properties.set("instrumentType", InstrumentType.BANJO);
  properties.set("model", "RB-3 Wreath");
  properties.delete("topWood");
  properties.set("numStrings", 5);
  inventory.addInstrument("8900231", 2945.95, new InstrumentSpec(properties));
}
