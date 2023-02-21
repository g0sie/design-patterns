import Builder, { oreType, typeType } from "./Builder";

const durability: Map<oreType, number> = new Map();
durability.set("wood", 59);
durability.set("stone", 131);
durability.set("iron", 250);
durability.set("gold", 32);
durability.set("diamond", 1561);
durability.set("netherite", 2031);

class Tool {
  public name: string | undefined;
  public ore: oreType | undefined;
  public type: typeType | undefined;

  public getDurability() {
    if (!this.ore) throw new Error("Ore is not defined");

    return durability.get(this.ore);
  }

  public log() {
    if (!this.name) throw new Error("Name is not defined");
    if (!this.ore) throw new Error("Ore is not defined");
    if (!this.type) throw new Error("Type is not defined");

    console.log(`Name: ${this.name}`);
    console.log(`Ore: ${this.ore}`);
    console.log(`Type: ${this.type}`);
    console.log(`Durability: ${this.getDurability()}`);
  }
}

class ToolBuilder implements Builder {
  private tool: Tool;

  constructor() {
    this.tool = new Tool();
  }

  reset() {
    this.tool = new Tool();
  }

  setName(name: string) {
    this.tool.name = name;
  }

  setOre(ore: oreType) {
    this.tool.ore = ore;
  }

  setType(type: typeType) {
    this.tool.type = type;
  }

  getResult() {
    return this.tool;
  }
}

export default ToolBuilder;
