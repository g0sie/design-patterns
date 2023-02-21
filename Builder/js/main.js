"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ToolBuilder_js_1 = __importDefault(require("./ToolBuilder.js"));
const RecipeBuilder_js_1 = __importDefault(require("./RecipeBuilder.js"));
const Director_js_1 = __importDefault(require("./Director.js"));
const toolBuilder = new ToolBuilder_js_1.default();
const recipeBuilder = new RecipeBuilder_js_1.default();
const director = new Director_js_1.default();
director.makeWoodenAxe(toolBuilder);
const woodenAxe = toolBuilder.getResult();
director.makeWoodenAxe(recipeBuilder);
const woodenAxeRecipe = recipeBuilder.getResult();
director.makeDiamondHoe(recipeBuilder);
const diamondHoeRecipe = recipeBuilder.getResult();
woodenAxe.log();
console.log("---------------");
woodenAxeRecipe.print();
console.log("---------------");
diamondHoeRecipe.print();
