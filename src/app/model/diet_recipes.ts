import { Client } from "./client";
import { DietRecipesFK } from "./diet_recipes_fk";
import { Recipe } from "./recipe";

export class DietRecipes {
    dietRecipesFK: DietRecipesFK;
    client: Client;
    recipe: Recipe;

    constructor(){
        this.dietRecipesFK = new DietRecipesFK();
        this.client = new Client();
        this.recipe = new Recipe();
    }
}