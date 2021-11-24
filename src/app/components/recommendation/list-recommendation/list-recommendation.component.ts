import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { Recommendation } from 'src/app/model/recommendation';
import { RecommendationService } from 'src/app/services/recommendation.service';


@Component({
  selector: 'app-list-recommendation',
  templateUrl: './list-recommendation.component.html',
  styleUrls: ['./list-recommendation.component.css']
})
export class ListRecommendationComponent implements OnInit {

  name: string='';
  id: number = 0;
  userType: string = "";
  recommendations: Recommendation[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
     private recommendationService: RecommendationService) { }

  ngOnInit(): void {
    this.userType = this.route.snapshot.params['userType'];
    this.id = this.route.snapshot.params['id'];
    this.loadDataRecommendations();
  }

  loadDataRecommendations(){
    this.recommendationService.getRecommendationList()
    .subscribe(recommendations=>this.recommendations=recommendations);
  }

  deleteRecipe(recommendation: Recommendation){
    this.recommendationService.deleteRecommendation(recommendation.id)
    .subscribe(data=>{this.loadDataRecommendations();})
  }

  updateRecipe(recommendation: Recommendation){
    this.router.navigate(['update-recommendation', recommendation.id]);
  }

  searchRecipeByName(){
    if(this.name.length!=0){
      this.recommendationService.getRecommendationByName(this.name)
      .subscribe(recommendations=>this.recommendations=recommendations);
    }
    else{
      this.loadDataRecommendations();
    }
  }

  return(){
    if (this.userType == "nutritionist")
    {
      this.router.navigate(['menu-nutritionist', this.id]);
    }
    else{
      this.router.navigate(['menu', this.id]);
    }
  }

}






  
  

  

