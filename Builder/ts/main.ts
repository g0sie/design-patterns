import ToolBuilder from "./ToolBuilder.js";

const builder = new ToolBuilder();
builder.setName("Wooden Axe");
builder.setOre("wood");
builder.setType("axe");
const woodenAxe = builder.getResult();

woodenAxe.log();
