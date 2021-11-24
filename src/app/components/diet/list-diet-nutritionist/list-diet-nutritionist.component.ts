import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { Diet } from 'src/app/model/diet';
import { Recipe } from 'src/app/model/recipe';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-list-diet-nutritionist',
  templateUrl: './list-diet-nutritionist.component.html',
  styleUrls: ['./list-diet-nutritionist.component.css']
})
export class ListDietNutritionistComponent implements OnInit {

  appointment_id: number = 1;
  appointment: Appointment = new Appointment();
  diet: Diet = new Diet();
  recipes: Recipe[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dietService: DietService,
    private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointment_id = this.route.snapshot.params['id'];
    this.appointmentService.getAppointmentById(this.appointment_id)
    .subscribe(datos=>{
      console.log(datos)
      this.appointment = datos;
      this.dietService.getDietById(datos.diet.id)
      .subscribe(datos2=>{
        console.log(datos2)
        this.diet = datos2;
        }, error=>console.log(error));
      this.dietService.findDietRecipes(datos.diet.id)
      .subscribe(datos3=>{
      console.log(datos3)
      this.recipes = datos3;
      }, error=>console.log(error));
    }, error=>console.log(error));
  }

  updateDiet(diet: Diet, appointment: Appointment){
    this.router.navigate(['update-diet', diet.id, appointment.nutritionist.id, appointment.id])
  }

  addRecipeToDiet(diet: Diet, appointment: Appointment){
    this.router.navigate(['add-diet-recipes', diet.id, appointment.id])
  }

  deleteRecipeFromDiet(recipe: Recipe, diet: Diet){
    this.dietService.deleteRecipeFromDiet(recipe.id, diet.id)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
  }

  return(appointment: Appointment){
    this.router.navigate(['appointments-history-nutritionist', appointment.nutritionist.id])
  }
}
