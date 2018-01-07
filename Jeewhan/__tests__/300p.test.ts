import { Inventory, initializeInventory, Builder, Wood, InstrumentSpec } from "../300p"

describe("잘 디자인된 릭의 프로그램 시헝 구동 >", () => {
  it("FindInstrument", () => {
    // givenn
    const inventory = new Inventory();
    const properties = new Map();
    initializeInventory(inventory);

    // when
    properties.set("builder", Builder.GIBSON);
    properties.set("backWood", Wood.MAPLE);
    const whatBryanLikes = new InstrumentSpec(properties);

    // then
    const matchingInstruments = inventory.search(whatBryanLikes);
    // expect
  });
});
