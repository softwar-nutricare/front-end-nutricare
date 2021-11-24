import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diet } from 'src/app/model/diet';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-update-diet',
  templateUrl: './update-diet.component.html',
  styleUrls: ['./update-diet.component.css']
})
export class UpdateDietComponent implements OnInit {

  id: number = 0;
  nutritionistId: number = 0;
  appointmentId: number = 0;
  diet: Diet = new Diet();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private dietService : DietService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.nutritionistId = this.route.snapshot.params['nutritionistId'];
    this.appointmentId = this.route.snapshot.params['appointmentId'];
    this.dietService.getDietById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.diet = datos;
    }, error=>console.log(error));
  }

  updateDiet(){
    this.dietService.updateDiet(this.id, this.diet)
    .subscribe(datos=>{
      console.log(datos)
    }, error=>console.log(error));
    this.diet = new Diet();
    this.return();
  }

  return(){
    this.router.navigate(['list-diet-nutritionist', this.appointmentId])
  }
}
