import { ClientFavoriteRecipes } from "./client_favorite_recipes";
import { DietRecipes } from "./diet_recipes";
import { Nutritionist } from "./nutritionist";

export class Recipe {
    id: number;
    name: string;
    descripcion: string;
    preparation: string;
    ingredients: string;
    favorite: number;
    created_at: Date;
    last_modification: Date;
    nutritionist: Nutritionist;
    recipeClientAssoc: Array<ClientFavoriteRecipes>;
    recipeDietAssoc: Array<DietRecipes>;
    
    constructor() {
        this.id = 0;
        this.name= "";
        this.descripcion= "";
        this.preparation= "";
        this.ingredients= "";
        this.favorite= 0;
        this.created_at= new Date();
        this.last_modification= new Date();
        this.nutritionist = new Nutritionist();
        this.recipeClientAssoc = new Array<ClientFavoriteRecipes>();
        this.recipeDietAssoc = new Array<DietRecipes>();
    }
}