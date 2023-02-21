import Builder from "./Builder";

class Director {
  makeWoodenAxe(builder: Builder) {
    builder.reset();
    builder.setName("Wooden Axe");
    builder.setOre("wood");
    builder.setType("axe");
  }

  makeDiamondHoe(builder: Builder) {
    builder.reset();
    builder.setName("Diamond Hoe");
    builder.setOre("diamond");
    builder.setType("hoe");
  }
}

export default Director;
