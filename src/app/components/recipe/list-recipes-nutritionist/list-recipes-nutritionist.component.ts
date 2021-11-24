import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-list-recipes-nutritionist',
  templateUrl: './list-recipes-nutritionist.component.html',
  styleUrls: ['./list-recipes-nutritionist.component.css']
})
export class ListRecipesNutritionistComponent implements OnInit {

  date: Date = new Date();
  name: string = "";
  date2: string = "";
  nutritionist_id: number = 0;
  recipes: Recipe[]=[];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.nutritionist_id = this.route.snapshot.params['id'];
    this.recipeService.getRecipeList()
    .subscribe(datos=>{
      console.log(datos)
      this.recipes=datos;
    }, error=>console.log(error));
    
    let today_date = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    if (today_date != null)
    {
      this.date2 = today_date;
    }
  }
  
  return(){
    this.router.navigate(['menu-nutritionist', this.nutritionist_id]);
  }

}
