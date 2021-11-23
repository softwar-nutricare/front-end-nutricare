import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nutritionist } from 'src/app/model/nutritionist';
import { NutritionistService } from 'src/app/services/nutritionist.service';

@Component({
  selector: 'app-update-nutritionist',
  templateUrl: './update-nutritionist.component.html',
  styleUrls: ['./update-nutritionist.component.css']
})
export class UpdateNutritionistComponent implements OnInit {

  id: number = 0;
  nutritionist: Nutritionist = new Nutritionist();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private nutritionistService : NutritionistService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.nutritionistService.getNutritionistById(this.id)
      .subscribe(datos=>{
        console.log(datos)
        this.nutritionist = datos;
      }, error=>console.log(error));
  }

  updateNutritionist(){
    this.nutritionistService.updateNutritionist(this.id, this.nutritionist)
      .subscribe(datos=>{
        console.log(datos)
      }, error=>console.log(error));
    this.nutritionist = new Nutritionist();
    this.router.navigate(['list-nutritionists', this.id])
  }

}
