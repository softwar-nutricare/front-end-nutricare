import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nutritionist } from 'src/app/model/nutritionist';
import { NutritionistService } from 'src/app/services/nutritionist.service';

@Component({
  selector: 'app-nutritionist-selected',
  templateUrl: './nutritionist-selected.component.html',
  styleUrls: ['./nutritionist-selected.component.css']
})
export class NutritionistSelectedComponent implements OnInit {

  client_id: number = 0;
  nutritionist_id: number = 0;
  nutritionist: Nutritionist = new Nutritionist();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nutritionistService: NutritionistService) { }

  ngOnInit(): void {
    this.client_id = this.route.snapshot.params['client_id'];
    this.nutritionist_id = this.route.snapshot.params['nutritionist_id'];
    this.loadDataNutritionist();
  }

  loadDataNutritionist(){
    this.searchNutritionistbyId();
  }

  searchNutritionistbyId(){
    this.nutritionistService.getNutritionistById(this.nutritionist_id)
    //.subscribe(nutritionist=>this.nutritionist = nutritionist)
    .subscribe(datos=>{
      console.log(datos)
      this.nutritionist = datos;
    }, error=>console.log(error));
  }

  createAppointment(client_id: number, nutritionist_id: number){
    this.router.navigate(['new-appointment', client_id, nutritionist_id])
  }
  
  return(){
    this.router.navigate(['available-nutritionist', this.client_id])
  }
}
