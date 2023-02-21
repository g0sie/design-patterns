"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToolBuilder_js_1 = __importDefault(require("./ToolBuilder.js"));
const RecipeBuilder_js_1 = __importDefault(require("./RecipeBuilder.js"));
const toolBuilder = new ToolBuilder_js_1.default();
const recipeBuilder = new RecipeBuilder_js_1.default();
toolBuilder.setName("Wooden Axe");
toolBuilder.setOre("wood");
toolBuilder.setType("axe");
const woodenAxe = toolBuilder.getResult();
recipeBuilder.setName("Wooden Axe");
recipeBuilder.setOre("wood");
recipeBuilder.setType("axe");
const woodenAxeRecipe = recipeBuilder.getResult();
woodenAxe.log();
console.log("---------------");
woodenAxeRecipe.print();
