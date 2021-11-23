import { ProfessionalSpecialties } from "./professional_specialties";

export class Specialty{
    id: number;
    name: string;
    institutionName: string;
    specialtyAssoc: Array<ProfessionalSpecialties>;
    
    constructor(){
        this.id = 0;
        this.name = "";
        this.institutionName = "";
        this.specialtyAssoc = new Array<ProfessionalSpecialties>();
    }
}