import ToolBuilder from "./ToolBuilder.js";
import RecipeBuilder from "./RecipeBuilder.js";

const toolBuilder = new ToolBuilder();
const recipeBuilder = new RecipeBuilder();

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
