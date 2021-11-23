import { DietRecipes } from "./diet_recipes";

export class Diet {
    id: number;
    name: string;
    description: string;
    createAt: Date;
    dietAssoc: Array<DietRecipes>;

    constructor(){
        this.id =0;
        this.name = "";
        this.description = "";
        this.createAt = new Date();
        this.dietAssoc = new Array<DietRecipes>();
    }
}