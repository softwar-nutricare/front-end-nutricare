import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';
import { Bill } from 'src/app/model/bill';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-bill',
  templateUrl: './list-bill.component.html',
  styleUrls: ['./list-bill.component.css']
})
export class ListBillComponent implements OnInit {

  client_id: number = 0;
  client: Client = new Client();
  bills2: Bill[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private billService: BillService,
    private clientService: ClientService,
    private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.client_id = this.route.snapshot.params['id'];
    this.searchClient();
    this.loadDataBills();
  }

  searchClient(){
    this.clientService.getClientById(this.client_id)
    .subscribe(datos=>{
      console.log(datos)
      this.client = datos;
    }, error=>console.log(error));
  }

  loadDataBills(){
    this.billService.getBillByClient(this.client_id)
    .subscribe(datos=>{
      console.log(datos)
      this.bills2 = datos;
    }, error=>console.log(error));
  }

  transformDate(date: Date): string{
    let today_date = this.datepipe.transform(date, 'yyyy-MM-dd');
    let date2: string = "";
    if (today_date != null)
    {
      date2 = today_date;
    }
    return date2;
  }
  
  return(){
    this.router.navigate(['menu', this.client_id]);
  }
  
}
