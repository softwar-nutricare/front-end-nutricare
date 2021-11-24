import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { Diet } from 'src/app/model/diet';
import { Recipe } from 'src/app/model/recipe';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ClientService } from 'src/app/services/client.service';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-list-diet',
  templateUrl: './list-diet.component.html',
  styleUrls: ['./list-diet.component.css']
})
export class ListDietComponent implements OnInit {

  appointment_id: number = 0;
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

  return(appointment: Appointment){
    this.router.navigate(['appointments-history-client', appointment.client.id])
  }
}
