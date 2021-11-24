import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { PaymentMethod } from 'src/app/model/payment_method';
import { ClientService } from 'src/app/services/client.service';
import { PaymentMethodService } from 'src/app/services/payment-method.service';

@Component({
  selector: 'app-create-payment-method',
  templateUrl: './create-payment-method.component.html',
  styleUrls: ['./create-payment-method.component.css']
})
export class CreatePaymentMethodComponent implements OnInit {
  client_id: number = 0;
  client: Client = new Client();
  payment: PaymentMethod = new PaymentMethod();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentMethodService: PaymentMethodService,
    private clientService : ClientService) { }

  ngOnInit(): void {
    this.assignClient();
  }

  assignClient(){
    this.client_id = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.client_id)
    .subscribe(datos=>{
      console.log(datos)
      this.client = datos;
      this.payment.client = this.client;
    }, error=>console.log(error));
  }

  insertPaymentMethod(client: Client){

    this.paymentMethodService.createPaymentMethod(this.payment)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.payment = new PaymentMethod();
    this.client = new Client();
    this.router.navigate(['list-payment-methods', client.id]);
  }

  return(){
    this.router.navigate(['list-payment-methods', this.client_id]);
  }
}
