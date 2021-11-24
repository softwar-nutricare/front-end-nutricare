import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recommendation } from 'src/app/model/recommendation';
import { RecommendationService } from 'src/app/services/recommendation.service';

@Component({
  selector: 'app-update-recommendation',
  templateUrl: './update-recommendation.component.html',
  styleUrls: ['./update-recommendation.component.css']
})
export class UpdateRecommendationComponent implements OnInit {

  id: number = 0;
  nutritionistId: number = 0;
  recommendation: Recommendation = new Recommendation();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recommendationService : RecommendationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.nutritionistId = this.route.snapshot.params['nutritionistId'];
    this.recommendationService.getRecommendationById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.recommendation = datos;
    }, error=>console.log(error));
  }

  updateRecommendation(nutritionistId: number){
    this.recommendationService.updateRecommendation(this.id, this.recommendation)
    .subscribe(datos=>{
      console.log(datos)
    }, error=>console.log(error));
    this.recommendation = new Recommendation();
    this.router.navigate(['published-recommendations', nutritionistId]);
  }

}
