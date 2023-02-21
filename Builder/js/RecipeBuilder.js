"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Recipe {
    print() {
        if (!this.toolName)
            throw new Error("ToolName is not defined");
        if (!this.ore)
            throw new Error("Ore is not defined");
        if (!this.oreNum)
            throw new Error("OreNum is not defined");
        if (!this.stickNum)
            throw new Error("StickNum is not defined");
        console.log(`To make ${this.toolName}:`);
        console.log(`Combine ${this.oreNum} ${this.ore} and ${this.stickNum} sticks.`);
    }
}
const oreNumMap = new Map();
oreNumMap.set("hoe", 2);
oreNumMap.set("axe", 3);
oreNumMap.set("shovel", 1);
oreNumMap.set("pickaxe", 3);
oreNumMap.set("sword", 2);
const stickNumMap = new Map();
stickNumMap.set("hoe", 2);
stickNumMap.set("axe", 2);
stickNumMap.set("shovel", 2);
stickNumMap.set("pickaxe", 2);
stickNumMap.set("sword", 1);
class RecipeBuilder {
    constructor() {
        this.recipe = new Recipe();
    }
    reset() {
        this.recipe = new Recipe();
    }
    setName(name) {
        this.recipe.toolName = name;
    }
    setOre(ore) {
        this.recipe.ore = ore;
    }
    setType(type) {
        if (!oreNumMap.has(type)) {
            throw new Error(`Value of ${type} doesn't exist in oreNumMap`);
        }
        if (!stickNumMap.has(type)) {
            throw new Error(`Value of ${type} doesn't exist in stickNumMap`);
        }
        this.recipe.oreNum = oreNumMap.get(type);
        this.recipe.stickNum = stickNumMap.get(type);
    }
    getResult() {
        return this.recipe;
    }
}
exports.default = RecipeBuilder;
