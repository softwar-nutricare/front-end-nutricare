import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nutritionist } from 'src/app/model/nutritionist';
import { Recommendation } from 'src/app/model/recommendation';
import { NutritionistService } from 'src/app/services/nutritionist.service';
import { RecommendationService } from 'src/app/services/recommendation.service';

@Component({
  selector: 'app-create-recommendation',
  templateUrl: './create-recommendation.component.html',
  styleUrls: ['./create-recommendation.component.css']
})
export class CreateRecommendationComponent implements OnInit {

  recommendation: Recommendation = new Recommendation();
  nutritionist: Nutritionist = new Nutritionist();
  nutritionist_id: number = 0;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recommendationService : RecommendationService,
    private nutritionistService : NutritionistService) {
    }

  ngOnInit(): void {
    this.nutritionist_id = this.route.snapshot.params['nutritionistId'];
    this.assignNutritionist();
  }

  assignNutritionist(){
    this.nutritionistService.getNutritionistById(this.nutritionist_id)
    .subscribe(datos=>{
      console.log(datos)
      this.nutritionist = datos;
    }, error=>console.log(error));
  }
  
  insertRecommendation(recommendation: Recommendation, nutritionist: Nutritionist){
    recommendation.nutritionist = nutritionist;
    this.recommendationService.createRecommendation(recommendation)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.recommendation = new Recommendation();
    this.nutritionist = new Nutritionist();
    this.return();
  }

  return(){
    this.router.navigate(['published-recommendations', this.nutritionist_id]);
  }

}
