import { Nutritionist } from "./nutritionist";
import { ProfessionalSpecialties } from "./professional_specialties";

export class ProfessionalProfile{
    id: number;
    professional_experience_description: string;
    nutritionist: Nutritionist;
    professionalProfileAssoc: Array<ProfessionalSpecialties>;

    constructor(){
        this.id = 0;
        this.professional_experience_description = "";
        this.nutritionist = new Nutritionist();
        this.professionalProfileAssoc = new Array<ProfessionalSpecialties>();
    }
}