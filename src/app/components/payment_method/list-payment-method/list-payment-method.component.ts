import { Component, OnInit } from '@angular/core';
import { PaymentMethodService } from 'src/app/services/payment-method.service';
import { PaymentMethod } from 'src/app/model/payment_method';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-payment-method',
  templateUrl: './list-payment-method.component.html',
  styleUrls: ['./list-payment-method.component.css']
})
export class ListPaymentMethodComponent implements OnInit {
  client_id: number = 0;
  client: Client = new Client();
  payments: PaymentMethod[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
     private paymentMethodService: PaymentMethodService,
     private clientService: ClientService) { }

  ngOnInit(): void {
    this.client_id = this.route.snapshot.params['id'];
    this.loadDataPaymentMethods();
  }

  loadDataPaymentMethods(){
    this.clientService.getClientById(this.client_id)
    .subscribe(datos=>{
      console.log(datos)
      this.client = datos;
      this.paymentMethodService.getPaymentMethodByClient(this.client_id)
      .subscribe(datos=>{
        console.log(datos)
        this.payments=datos;
      }, error=>console.log(error));
    }, error=>console.log(error));
  }

  deletePaymentMethod(payment_method: PaymentMethod){
    this.paymentMethodService.deletePaymentMethod(payment_method.id)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.loadDataPaymentMethods();
  }

  updatePaymentMethod(payment_method: PaymentMethod){
    this.router.navigate(['actualizar', payment_method.id]); //cambiar enlace update
  }

  newPaymentMethod(client: Client){
    this.router.navigate(['new-payment-method', client.id]);
  }
  return(){
    this.router.navigate(['menu', this.client_id]);
  }
}