import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { Client } from 'src/app/model/client';
import { PaymentMethod } from 'src/app/model/payment_method';
import { Recipe } from 'src/app/model/recipe';
import { ClientService } from 'src/app/services/client.service';
import { BillService } from 'src/app/services/bill.service';
import { PaymentMethodService } from 'src/app/services/payment-method.service';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  id: number = 0;
  client: Client = new Client();
  recipes: Recipe[]=[];
  bills: Bill[]=[];
  paymentMethods: PaymentMethod[]=[];
  appointments: Appointment[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private clientService: ClientService,
    private billService: BillService,
    private paymentMethodService: PaymentMethodService,
    private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadDataClient();
  }

  loadDataClient(){
    this.searchClientById();
    this.searchClientFavoriteRecipes();
    this.searchClientPaymentMethods();
    this.searchClientBills();
    this.searchAppointments();
  }

  //CLIENT
  searchClientById(){
    this.clientService.getClientById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.client = datos;
    }, error=>console.log(error));
  }

  deleteClient(client: Client){
    this.deleteClientFavoritesRecipes();
    this.deleteClientPaymentMethods();
    this.deleteClientBills();
    this.deleteAppointments();
    this.deleteClientInfo(client);
    this.router.navigate(['login'])
  }

  updateClient(client: Client){
    this.router.navigate(['update-client', client.id])//Se irá hacia el actualizar ('update')
  }

  deleteClientInfo(client: Client){
    this.clientService.deleteClient(client.id)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
  }

  //BILLS
  searchClientBills(){
    this.billService.getBillByClient(this.id)
    .subscribe(bills=>this.bills=bills);
  }

  deleteClientBills(){
    if (this.bills!=null){
      for (let bill of this.bills){
        this.billService.deleteBill(bill.id)
        .subscribe(datos=>console.log(datos), error=>console.log(error));
      }
    }
  }

  //PAYMENT
  searchClientPaymentMethods(){
    this.paymentMethodService.getPaymentMethodByClient(this.id)
    .subscribe(paymentMethods=>this.paymentMethods=paymentMethods);
  }

  deleteClientPaymentMethods(){
    if (this.paymentMethods!=null){
      for (let paymentMethod of this.paymentMethods){
        this.paymentMethodService.deletePaymentMethod(paymentMethod.id)
        .subscribe(datos=>console.log(datos), error=>console.log(error));
      }
    }
  }

  //FAVORITE RECIPES
  searchClientFavoriteRecipes(){
    this.clientService.getClientFavoriteRecipes(this.id)
    .subscribe(recipes=>this.recipes=recipes);
  }

  deleteClientFavoritesRecipes(){
    if (this.recipes!=null){
      for (let recipe of this.recipes){
        this.clientService.deleteClientFavoriteRecipe(recipe.id, this.client.id)
        .subscribe(datos=>console.log(datos), error=>console.log(error));
      }
    }
  }
  
  //APPOINTMENT
  searchAppointments(){
    this.appointmentService.getAppointmentByClient(this.id)
    .subscribe(appointments=>this.appointments=appointments);
  }

  deleteAppointments(){
    if (this.appointments!=null){
      for (let appointment of this.appointments){
        this.appointmentService.deleteAppointment(appointment.id)
        .subscribe(datos=>console.log(datos), error=>console.log(error));
      }
    }
  }

  return(){
    this.router.navigate(['menu', this.id]);
  }
}
