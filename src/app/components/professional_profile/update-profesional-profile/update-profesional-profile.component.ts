import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionalProfile } from 'src/app/model/professional_profile';
import { ProfessionalProfileService } from 'src/app/services/professional-profile.service';

@Component({
  selector: 'app-update-profesional-profile',
  templateUrl: './update-profesional-profile.component.html',
  styleUrls: ['./update-profesional-profile.component.css']
})
export class UpdateProfesionalProfileComponent implements OnInit {

  nutritionistId: number = 0;
  professionalProfile: ProfessionalProfile = new ProfessionalProfile();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private professionalProfileService : ProfessionalProfileService) { }

  ngOnInit(): void {
    this.nutritionistId = this.route.snapshot.params['id'];
    this.professionalProfileService.getProfessionalprofileByNutritionist(this.nutritionistId)
      .subscribe(datos=>{
        console.log(datos)
        this.professionalProfile = datos;
      }, error=>console.log(error));
  }

  updateProfessionalProfile(){
    this.professionalProfileService.updateProfessionalprofile(this.professionalProfile.id, this.professionalProfile)
      .subscribe(datos=>{
        console.log(datos)
      }, error=>console.log(error));
    this.professionalProfile = new ProfessionalProfile();
    this.router.navigate(['list-nutritionists', this.nutritionistId])
  }

}
