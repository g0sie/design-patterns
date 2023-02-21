"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const durability = new Map();
durability.set("wood", 59);
durability.set("stone", 131);
durability.set("iron", 250);
durability.set("gold", 32);
durability.set("diamond", 1561);
durability.set("netherite", 2031);
class Tool {
    getDurability() {
        if (!this.ore)
            throw new Error("Ore is not defined");
        return durability.get(this.ore);
    }
    log() {
        if (!this.name)
            throw new Error("Name is not defined");
        if (!this.ore)
            throw new Error("Ore is not defined");
        if (!this.type)
            throw new Error("Type is not defined");
        console.log(`Name: ${this.name}`);
        console.log(`Ore: ${this.ore}`);
        console.log(`Type: ${this.type}`);
        console.log(`Durability: ${this.getDurability()}`);
    }
}
class ToolBuilder {
    constructor() {
        this.tool = new Tool();
    }
    reset() {
        this.tool = new Tool();
    }
    setName(name) {
        this.tool.name = name;
    }
    setOre(ore) {
        this.tool.ore = ore;
    }
    setType(type) {
        this.tool.type = type;
    }
    getResult() {
        return this.tool;
    }
}
exports.default = ToolBuilder;
