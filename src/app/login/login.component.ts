import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../model/client';
import { Nutritionist } from '../model/nutritionist';
import { ClientService } from '../services/client.service';
import { NutritionistService } from '../services/nutritionist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: number = 0;
  username: string = "";
  password: string = "";
  client: Client = new Client();
  nutritionist: Nutritionist = new Nutritionist();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private nutritionistService: NutritionistService) { }

  ngOnInit(): void {
  }

  getUser(){
    try {
      this.clientService.getClientByUsername(this.username)
      .subscribe(datos=>{
        console.log(datos)
        this.client = datos;
        if (this.client.id != 0 && this.client.password == this.password){
          this.router.navigate(['menu', this.client.id]);
        }
      }, error=>console.log(error));
    } finally {
      this.nutritionistService.getNutritionistByUsername(this.username)
      .subscribe(datos=>{
        console.log(datos)
        this.nutritionist = datos;
        if (this.nutritionist.id != 0 && this.nutritionist.password == this.password){
          this.router.navigate(['menu-nutritionist', this.nutritionist.id]);
        }
      }, error=>console.log(error));
    }
  }

  registerClient(){
    this.router.navigate(['new-client']);
  }

  registerNutritionist(){
    this.router.navigate(['new-nutritionist']);
  }
}
