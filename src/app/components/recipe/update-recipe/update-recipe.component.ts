import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit {

  id: number = 0;
  nutritionistId: number = 0;
  recipe: Recipe = new Recipe();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.nutritionistId = this.route.snapshot.params['nutritionistId'];
    this.recipeService.getRecipeById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.recipe = datos;
    }, error=>console.log(error));
  }

  updateRecipe(nutritionistId: number){
    this.recipeService.updateRecipe(this.id, this.recipe)
    .subscribe(datos=>{
      console.log(datos)
    }, error=>console.log(error));
    this.recipe = new Recipe();
    this.router.navigate(['published-recipes', nutritionistId]);
  }

}
