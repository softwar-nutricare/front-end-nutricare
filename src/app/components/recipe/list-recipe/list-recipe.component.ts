import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/model/client';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  date: Date = new Date();
  name: string = "";
  date2: string = "";
  client_id: number = 0;
  client: Client = new Client();
  recipes: Recipe[]=[];


  constructor(private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private clientService: ClientService,
    private datepipe: DatePipe) { }

  ngOnInit(): void {
    this.client_id = this.route.snapshot.params['id'];
    this.recipeService.getRecipeList()
    .subscribe(datos=>{
      console.log(datos)
      this.recipes=datos;
      this.clientService.getClientById(this.client_id)
      .subscribe(datos2=>{
        console.log(datos2)
        this.client = datos2;
      }, error=>console.log(error));
    }, error=>console.log(error));
    
    let today_date = this.datepipe.transform(this.date, 'yyyy-MM-dd');
    if (today_date != null)
    {
      this.date2 = today_date;
    }
  }

  searchRecipeByName(){
    if(this.name.length!=0){
      this.recipeService.getRecipeByName(this.name)
      .subscribe(recipes=>this.recipes=recipes);
    }
  }

  addToFavorites(recipe: Recipe, client: Client){
    this.clientService.addFavoriteRecipe(recipe.id, client.id, client, this.date2)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
  }

  showFavorites(client: Client){
    this.router.navigate(['favorite-recipes', client.id])
  }
  
  return(){
    this.router.navigate(['menu', this.client_id]);
  }
}