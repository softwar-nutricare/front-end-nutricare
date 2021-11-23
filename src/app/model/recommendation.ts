import { Nutritionist } from "./nutritionist";

export class Recommendation {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    lastModification: Date;
    nutritionist: Nutritionist;
    
    constructor() {
        this.id = 0;
        this.name= "";
        this.description= "";
        this.createdAt= new Date();
        this.lastModification= new Date();
        this.nutritionist = new Nutritionist();
    }
}