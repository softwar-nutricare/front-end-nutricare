import { Client } from "./client";
import { Diet } from "./diet";
import { Nutritionist } from "./nutritionist";

export class Appointment {
    id: number;
    client: Client;
    nutritionist: Nutritionist;
    diet: Diet;
    createdAt: Date;
    appointmentDate: Date;
    nutritionistNotes: string;

    constructor(){
        this.id =0;
        this.client = new Client();
        this.nutritionist = new Nutritionist();
        this.diet = new Diet();
        this.createdAt = new Date();
        this.appointmentDate = new Date();
        this.nutritionistNotes = "";
    }
}
