import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { Bill } from 'src/app/model/bill';
import { Client } from 'src/app/model/client';
import { Diet } from 'src/app/model/diet';
import { Nutritionist } from 'src/app/model/nutritionist';
import { AppointmentService } from 'src/app/services/appointment.service';
import { BillService } from 'src/app/services/bill.service';
import { ClientService } from 'src/app/services/client.service';
import { DietService } from 'src/app/services/diet.service';
import { NutritionistService } from 'src/app/services/nutritionist.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  client_id: number = 0;
  nutritionist_id: number = 0;

  nutritionist: Nutritionist = new Nutritionist();
  appointment: Appointment = new Appointment();
  client: Client = new Client();

  bill: Bill = new Bill();
  date: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nutritionistService: NutritionistService,
    private clientService: ClientService,
    private appointmentService: AppointmentService,
    private dietService: DietService,
    private billService: BillService) { }

  ngOnInit(): void {
    this.client_id = this.route.snapshot.params['client_id'];
    this.nutritionist_id = this.route.snapshot.params['nutritionist_id'];
    this.loadDataAppointment();
  }

  loadDataAppointment(){
    this.searchNutritionistbyId();
    this.searchClientbyId();
  }

  searchNutritionistbyId(){
    this.nutritionistService.getNutritionistById(this.nutritionist_id)
    .subscribe(datos=>{
      console.log(datos)
      this.nutritionist = datos;
    }, error=>console.log(error));
  }

  searchClientbyId(){
    this.clientService.getClientById(this.client_id)
    .subscribe(datos=>{
      console.log(datos)
      this.client = datos;
    }, error=>console.log(error));
  }

  insertBill(){
    this.bill.client = this.client;
    this.bill.amount = 35;
    this.billService.createBill(this.bill)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
  }

  createAppointment(){
    this.appointment.nutritionist = this.nutritionist;
    this.appointment.client = this.client;
    this.insertBill();
    this.appointmentService.createAppointment(this.appointment)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.bill = new Bill();
    this.client = new Client();
    this.appointment = new Appointment();
    this.nutritionist = new Nutritionist(); 
    this.router.navigate(['menu', this.client_id]);
  }
  
  return(){
    this.router.navigate(['nutritionist-selected', this.client_id, this.nutritionist_id])
  }
}
