import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nutricare';
  
  constructor(
    private route: ActivatedRoute,
    private router: Router){ }

  login(){
    this.router.navigate(['login'])
  }
}
