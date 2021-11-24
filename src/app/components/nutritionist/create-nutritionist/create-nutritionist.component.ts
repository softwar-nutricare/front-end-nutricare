import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nutritionist } from 'src/app/model/nutritionist';
import { ProfessionalProfile } from 'src/app/model/professional_profile';
import { NutritionistService } from 'src/app/services/nutritionist.service';
import { ProfessionalProfileService } from 'src/app/services/professional-profile.service';

@Component({
  selector: 'app-create-nutritionist',
  templateUrl: './create-nutritionist.component.html',
  styleUrls: ['./create-nutritionist.component.css']
})
export class CreateNutritionistComponent implements OnInit {

  nutritionist: Nutritionist = new Nutritionist();
  professionalProfile: ProfessionalProfile = new ProfessionalProfile();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private nutritionistService: NutritionistService,
              private professionalProfileService: ProfessionalProfileService) { }

  ngOnInit(): void {
  }

  insertNutritionist(nutritionist: Nutritionist, professionalProfile: ProfessionalProfile){
    this.nutritionistService.createNutritionist(nutritionist)
      .subscribe(datos=>{
        console.log(datos)
        this.insertProfessionalProfile(nutritionist, professionalProfile);
      }, error=>console.log(error));
    this.nutritionist = new Nutritionist();
    this.professionalProfile = new ProfessionalProfile();
    this.redirect();
  }

  insertProfessionalProfile(nutritionist: Nutritionist, professionalProfile: ProfessionalProfile){
    this.nutritionistService.getNutritionistByUsername(nutritionist.username)
      .subscribe(datos=>{
        console.log(datos)
        professionalProfile.nutritionist = datos;
        this.professionalProfileService.createProfessionalprofile(professionalProfile)
          .subscribe(datos=>console.log(datos), error=>console.log(error));
      }, error=>console.log(error));
  }

  redirect(){
    this.router.navigate(['login'])
  }
}
