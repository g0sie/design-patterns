"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Director {
    makeWoodenAxe(builder) {
        builder.reset();
        builder.setName("Wooden Axe");
        builder.setOre("wood");
        builder.setType("axe");
    }
    makeDiamondHoe(builder) {
        builder.reset();
        builder.setName("Diamond Hoe");
        builder.setOre("diamond");
        builder.setType("hoe");
    }
}
exports.default = Director;
