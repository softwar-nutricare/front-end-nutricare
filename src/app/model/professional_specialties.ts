import { ProfessionalProfile } from "./professional_profile";
import { ProfessionalSpecialtiesFK } from "./professional_specialties_fk";
import { Specialty } from "./specialty";

export class ProfessionalSpecialties {
    professionalSpecialtiesFK: ProfessionalSpecialtiesFK;
    professionalProfile: ProfessionalProfile;
    specialty: Specialty;

    constructor(){
        this.professionalSpecialtiesFK = new ProfessionalSpecialtiesFK();
        this.professionalProfile = new ProfessionalProfile();
        this.specialty = new Specialty();
    }
}