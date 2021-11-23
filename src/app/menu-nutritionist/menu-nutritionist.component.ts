import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-nutritionist',
  templateUrl: './menu-nutritionist.component.html',
  styleUrls: ['./menu-nutritionist.component.css']
})
export class MenuNutritionistComponent implements OnInit {

  nutritionist_id: number = 0;
  userType: string ="nutritionist";

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.nutritionist_id = this.route.snapshot.params['id'];
  }

  profile(){
    this.router.navigate(['list-nutritionists', this.nutritionist_id])
  }

  pendingAppointments(){
    this.router.navigate(['pending-appointments', this.nutritionist_id])
  }

  appointmentsHistory(){
    this.router.navigate(['appointments-history-nutritionist', this.nutritionist_id])
  }

  listRecipes(){
    this.router.navigate(['list-recipes-nutritionist', this.nutritionist_id])
  }

  listRecommendations(){
    this.router.navigate(['list-recommendations', this.userType, this.nutritionist_id])
  }

  publishedRecipes(){
    this.router.navigate(['published-recipes', this.nutritionist_id])
  }

  publishedRecommendations(){
    this.router.navigate(['published-recommendations', this.nutritionist_id])
  }

}
