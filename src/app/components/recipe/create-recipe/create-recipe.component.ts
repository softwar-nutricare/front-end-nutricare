import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nutritionist } from 'src/app/model/nutritionist';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { NutritionistService } from 'src/app/services/nutritionist.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  recipe: Recipe = new Recipe();
  nutritionist: Nutritionist = new Nutritionist();
  nutritionist_id: number = 0;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recipeService : RecipeService,
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
  
  insertRecipe(recipe: Recipe, nutritionist: Nutritionist){
    recipe.nutritionist = nutritionist;
    this.recipeService.createRecipe(recipe)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.recipe = new Recipe();
    this.nutritionist = new Nutritionist();
    this.return();
  }

  return(){
    this.router.navigate(['published-recipes', this.nutritionist_id]);
  }

}