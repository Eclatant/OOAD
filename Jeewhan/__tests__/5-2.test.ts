import initializeInventory from "../5-2/init";
import InstrumentSpec from "../5-2/InstrumentSpec";
import { Builder, Wood } from "../5-2/Interface";
import Inventory from "../5-2/Inventory";

describe("잘 디자인된 릭의 프로그램 시헝 구동 >", () => {
  it("FindInstrument", () => {
    // given
    const inventory = new Inventory();
    initializeInventory(inventory);

    // when
    const properties = {
      backWood: Wood.MAPLE,
      builder: Builder.GIBSON
    };
    const whatBryanLikes = new InstrumentSpec(properties);

    // then
    const matchingInstruments = inventory.search(whatBryanLikes);
    for (const inst of matchingInstruments) {
      expect(inst.instrumentSpec.properties.backWood).toBe(Wood.MAPLE);
      expect(inst.instrumentSpec.properties.builder).toBe(Builder.GIBSON);
    }
  });
});
