import InstrumentSpec from "./InstrumentSpec";
import { Builder, InstrumentType, Type, Wood } from "./Interface";
import Inventory from "./Inventory";

export default function initializeInventory(inventory: Inventory) {
  const data1 = {
    backWood: Wood.SITKA,
    builder: Builder.COLLINGS,
    instrumentType: InstrumentType.GUITAR,
    model: "CJ",
    numStrings: 6,
    topWood: Wood.INDIAN_ROSEWOOD,
    type: Type.ACOUSTIC
  };
  inventory.addInstrument("11277", 3999.95, new InstrumentSpec(data1));

  const data2 = {
    ...data1,
    backWood: Wood.ADIRONDACK,
    builder: Builder.MARTIN,
    model: "D-18",
    topWood: Wood.MAHOGANY
  };
  inventory.addInstrument("122784", 5495.95, new InstrumentSpec(data2));

  const data3 = {
    ...data2,
    backWood: Wood.ALDER,
    builder: Builder.FENDER,
    model: "Stratocastor",
    topWood: Wood.ALDER,
    type: Type.ELECTRIC
  };
  inventory.addInstrument("V95693", 1499.95, new InstrumentSpec(data3));
  inventory.addInstrument("V9512", 1549.95, new InstrumentSpec(data3));

  const data4 = {
    ...data3,
    backWood: Wood.MAPLE,
    builder: Builder.GIBSON,
    model: "Les Paul",
    topWood: Wood.MAPLE
  };

  inventory.addInstrument("70108276", 2295.95, new InstrumentSpec(data4));

  const data5 = {
    ...data4,
    backWood: Wood.MAHOGANY,
    model: "SG '61 Reissue",
    topWood: Wood.MAHOGANY
  };

  inventory.addInstrument("82765501", 1890.95, new InstrumentSpec(data5));

  const data6 = {
    ...data5,
    backWood: Wood.MAPLE,
    instrumentType: InstrumentType.MANDOLIN,
    model: "F-5G",
    topWood: Wood.MAPLE,
    type: Type.ACOUSTIC
  };

  delete data6.numStrings;
  inventory.addInstrument("9019920", 5495.99, new InstrumentSpec(data6));

  const data7 = {
    ...data6,
    instrumentType: InstrumentType.BANJO,
    model: "RB-3 Wreath",
    numStrings: 5
  };

  delete data7.topWood;
  inventory.addInstrument("8900231", 2945.95, new InstrumentSpec(data7));
}
