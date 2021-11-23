import { Client } from "./client";
import { ClientFavoriteRecipesFK } from "./client_favorite_recipes_fk";
import { Recipe } from "./recipe";

export class ClientFavoriteRecipes {
    clientFavoriteRecipesFK: ClientFavoriteRecipesFK;
    client: Client;
    recipe: Recipe;
    addedAt: Date;

    constructor(){
        this.clientFavoriteRecipesFK = new ClientFavoriteRecipesFK();
        this.client = new Client();
        this.recipe = new Recipe();
        this.addedAt = new Date();
    }
}
