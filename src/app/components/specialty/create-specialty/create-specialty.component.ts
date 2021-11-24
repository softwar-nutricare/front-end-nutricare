import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Specialty } from 'src/app/model/specialty';
import { ProfessionalProfileService } from 'src/app/services/professional-profile.service';
import { SpecialtyService } from 'src/app/services/specialty.service';

@Component({
  selector: 'app-create-specialty',
  templateUrl: './create-specialty.component.html',
  styleUrls: ['./create-specialty.component.css']
})
export class CreateSpecialtyComponent implements OnInit {

  nutritionistId: number = 0;
  professionalProfileId: number = 0;

  specialty: Specialty = new Specialty();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private specialtyService: SpecialtyService,
    private professionalProfileService: ProfessionalProfileService) { }

  ngOnInit(): void {
    this.nutritionistId = this.route.snapshot.params['id'];
    this.professionalProfileId = this.route.snapshot.params['profileId'];
  }

  insertSpecialty(specialty: Specialty, professionalProfileId: number){
    this.specialtyService.createSpecialty(specialty)
    .subscribe(datos=>{
      console.log(datos)
      this.insertSpecialtyToProfessionalProfile(specialty, professionalProfileId);
      this.return();
    }, error=>console.log(error));
    this.specialty = new Specialty();
  }

  insertSpecialtyToProfessionalProfile(specialty: Specialty, professionalProfileId: number){
    this.specialtyService.searchByNameAndInstitutionName(specialty.name, specialty.institutionName)
    .subscribe(datos2=>{
      console.log(datos2)
      specialty = datos2;
      this.professionalProfileService.addSpecialtyToProfessionalProfile(specialty.id, professionalProfileId)
      .subscribe(datos3=>console.log(datos3), error=>console.log(error));
    }, error=>console.log(error));
  }

  return(){
    this.router.navigate(['list-nutritionists', this.nutritionistId]);
  }
}
