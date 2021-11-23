import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-published-recipes',
  templateUrl: './published-recipes.component.html',
  styleUrls: ['./published-recipes.component.css']
})
export class PublishedRecipesComponent implements OnInit {

  lastName: string ='';
  nutritionist_id: number = 0;
  recipes: Recipe[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.nutritionist_id = this.route.snapshot.params['id'];
    this.loadDataRecipes();
  }

  loadDataRecipes(){
    this.recipeService.getRecipeByNutritionist(this.nutritionist_id)
      .subscribe(recipes=>this.recipes=recipes);
  }

  deleteRecipe(id: number){
    this.recipeService.deleteRecipe(id)
      .subscribe(data=>{this.loadDataRecipes();})
  }

  updateRecipe(recipe: Recipe, nutritionistId: number){
    this.router.navigate(['update-recipe', recipe.id, nutritionistId])
  }

  insertRecipe(nutritionistId: number){
    this.router.navigate(['new-recipe', nutritionistId])
  }

  return(){
    this.router.navigate(['menu-nutritionist', this.nutritionist_id]);
  }
}
