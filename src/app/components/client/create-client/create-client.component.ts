import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  client: Client = new Client();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService) { }

  ngOnInit(): void {
  }

  insertClient(){
    this.clientService.createClient(this.client)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.client = new Client();
    this.router.navigate(['login']);
  }
}
