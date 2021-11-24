import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Specialty } from 'src/app/model/specialty';
import { SpecialtyService } from 'src/app/services/specialty.service';
import { Nutritionist } from 'src/app/model/nutritionist';
import { NutritionistService } from 'src/app/services/nutritionist.service';
import { ProfessionalProfileService } from 'src/app/services/professional-profile.service';
import { ProfessionalProfile } from 'src/app/model/professional_profile';
@Component({
  selector: 'app-list-nutritionist',
  templateUrl: './list-nutritionist.component.html',
  styleUrls: ['./list-nutritionist.component.css']
})
export class ListNutritionistComponent implements OnInit {
  id: number = 0;
  professionalProfile: ProfessionalProfile = new ProfessionalProfile();
  specialty: Specialty = new Specialty();
  specialties: Specialty[]=[];
  nutritionist: Nutritionist = new Nutritionist();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private specialtyService: SpecialtyService,
    private nutritionisService: NutritionistService,
    private professionalProfileService: ProfessionalProfileService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadDataNutritionist();
  }
  
  loadDataNutritionist(){
    this.nutritionisService.getNutritionistById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.nutritionist = datos;

      this.professionalProfileService.getProfessionalprofileByNutritionist(this.nutritionist.id)
      .subscribe(datos2=>{
        console.log(datos2)
        this.professionalProfile = datos2;

        this.professionalProfileService.findSpecialtiesByProfessionalProfileId(this.professionalProfile.id)
        .subscribe(datos3=>{
          console.log(datos3)
          this.specialties = datos3;
        }, error=>console.log(error));

      }, error=>console.log(error));
      
    }, error=>console.log(error));
  }

  //NUTRITIONIST
  deleteNutritionist(nutritionist: Nutritionist){
    this.nutritionisService.deleteNutritionist(nutritionist.id)
    .subscribe(data=>{this.loadDataNutritionist();})
  }

  updateNutritionist(nutritionist: Nutritionist){
    this.router.navigate(['update-nutritionist', nutritionist.id]);
  }

  //SPECIALTIES
  insertSpecialty(professionalProfile: ProfessionalProfile){
    this.router.navigate(['new-specialty', this.id, professionalProfile.id]);
  }
  
  deleteSpecialty(specialty: Specialty, professionalProfileId: number){
    this.professionalProfileService.deleteSpecialtyFromProfessionalProfile(specialty.id, professionalProfileId)
    .subscribe(data=>{
      this.specialtyService.deleteSpecialty(specialty.id)
      .subscribe(data2=>{this.loadDataNutritionist();});
    });
  }

  updateSpecialty(specialty: Specialty){
    this.router.navigate(['update-specialty', specialty.id]);
  }

  //PROFESSIONAL PROFILE
  updateProfessionalProfile(nutritionist: Nutritionist){
    this.router.navigate(['update-professional-profile', nutritionist.id]);
  }
  
  return(){
    this.router.navigate(['menu-nutritionist', this.id]);
  }

}
