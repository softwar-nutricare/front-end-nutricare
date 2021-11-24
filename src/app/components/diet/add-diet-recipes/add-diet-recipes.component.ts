import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diet } from 'src/app/model/diet';
import { Recipe } from 'src/app/model/recipe';
import { DietService } from 'src/app/services/diet.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-add-diet-recipes',
  templateUrl: './add-diet-recipes.component.html',
  styleUrls: ['./add-diet-recipes.component.css']
})
export class AddDietRecipesComponent implements OnInit {

  name: string='';
  diet_id: number = 0;
  diet: Diet = new Diet();
  appointmentId: number = 0;
  recipes: Recipe[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dietService: DietService,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.diet_id = this.route.snapshot.params['id'];
    this.appointmentId = this.route.snapshot.params['appointmentId'];
    this.dietService.getDietById(this.diet_id)
    .subscribe(datos=>{
      console.log(datos)
      this.diet = datos;
      this.recipeService.getRecipeList()
      .subscribe(datos2=>{
        console.log(datos2)
        this.recipes = datos2;
      }, error=>console.log(error))
    }, error=>console.log(error));
  }

  addRecipeToDiet(diet: Diet, recipe: Recipe){
    this.dietService.addRecipeToDiet(recipe.id, diet.id)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.return();
  }

  return(){
    this.router.navigate(['list-diet-nutritionist', this.appointmentId])
  }
}
