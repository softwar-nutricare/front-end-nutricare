import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recommendation } from 'src/app/model/recommendation';
import { RecommendationService } from 'src/app/services/recommendation.service';

@Component({
  selector: 'app-published-recommendations',
  templateUrl: './published-recommendations.component.html',
  styleUrls: ['./published-recommendations.component.css']
})
export class PublishedRecommendationsComponent implements OnInit {

  nutritionist_id: number = 0;
  recommendations: Recommendation[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
     private recommendationService: RecommendationService) { }

  ngOnInit(): void {
    this.nutritionist_id = this.route.snapshot.params['id'];
    this.loadDataRecommendation();
  }
  
  loadDataRecommendation(){
    this.recommendationService.getRecommendationByNutritionist(this.nutritionist_id)
    .subscribe(recommendations=>this.recommendations=recommendations);
  }

  deleteRecommendation(id: number){
    this.recommendationService.deleteRecommendation(id)
    .subscribe(data=>{this.loadDataRecommendation();})
  }

  updateRecommendation(recommendation: Recommendation, nutritionistId: number){
    this.router.navigate(['update-recommendation', recommendation.id, nutritionistId])
  }

  insertRecommendation(nutritionistId: number){
    this.router.navigate(['new-recommendation', nutritionistId])
  }
  
  return(){
    this.router.navigate(['menu-nutritionist', this.nutritionist_id]);
  }

}
