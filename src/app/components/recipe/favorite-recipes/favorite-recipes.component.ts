import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/model/client';
import { Recipe } from 'src/app/model/recipe';
import { ClientService } from 'src/app/services/client.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorite-recipes.component.html',
  styleUrls: ['./favorite-recipes.component.css']
})
export class FavoriteRecipesComponent implements OnInit {
  
  name: string = "";
  client_id: number = 0;
  client: Client = new Client();
  recipes: Recipe[]=[];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService) { }

  ngOnInit(): void {
    this.client_id = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.client_id)
      .subscribe(datos=>{
      console.log(datos)
      this.client = datos;
      this.clientService.getClientFavoriteRecipes(this.client_id)
      .subscribe(datos=>{
      console.log(datos)
      this.recipes=datos;
      }, error=>console.log(error));
    }, error=>console.log(error));
  }

  deleteFromFavorites(recipe: Recipe, client: Client){
    this.clientService.deleteClientFavoriteRecipe(recipe.id, client.id)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.ngOnInit();
  }
  
  return(){
    this.router.navigate(['list-recipes', this.client_id])
  }
}
