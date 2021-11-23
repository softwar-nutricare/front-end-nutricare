import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { Nutritionist } from 'src/app/model/nutritionist';
import { NutritionistService } from 'src/app/services/nutritionist.service';

@Component({
  selector: 'app-available-nutritionists',
  templateUrl: './available-nutritionists.component.html',
  styleUrls: ['./available-nutritionists.component.css']
})
export class AvailableNutritionistsComponent implements OnInit {

  client_id: number = 0;
  nutritionists: Nutritionist[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private nutritionistService: NutritionistService) { }

  ngOnInit(): void {
    this.client_id = this.route.snapshot.params['id'];
    this.loadDataAppointments();
  }

  loadDataAppointments(){
    this.nutritionistService.getNutritionistList()
      .subscribe(nutritionists=>this.nutritionists=nutritionists);
  }

  nutritionistSelected(nutritionist_id: number){
    this.router.navigate(['nutritionist-selected', this.client_id, nutritionist_id])
  }

  return(){
    this.router.navigate(['menu', this.client_id]);
  }
}
