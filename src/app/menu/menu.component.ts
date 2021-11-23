import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  client_id: number = 0;
  userType: string = "client";
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.client_id = this.route.snapshot.params['id'];
  }

  profile(){
    this.router.navigate(['list-clients', this.client_id])
  }

  appointments(){
    this.router.navigate(['available-nutritionist', this.client_id])
  }

  appointmentsHistory(){
    this.router.navigate(['appointments-history-client', this.client_id])
  }

  listRecipes(){
    this.router.navigate(['list-recipes', this.client_id])
  }

  listRecommendations(){
    this.router.navigate(['list-recommendations', this.userType, this.client_id])
  }

  paymentMethods(){
    this.router.navigate(['list-payment-methods', this.client_id])
  }

  billing(){
    this.router.navigate(['list-bills', this.client_id])
  }
}
