import ToolBuilder from "./ToolBuilder.js";
import RecipeBuilder from "./RecipeBuilder.js";
import Director from "./Director.js";

const toolBuilder = new ToolBuilder();
const recipeBuilder = new RecipeBuilder();
const director = new Director();

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
