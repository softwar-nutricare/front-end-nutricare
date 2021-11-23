import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './components/client/create-client/create-client.component';
import { ListClientComponent } from './components/client/list-client/list-client.component';
import { UpdateClientComponent } from './components/client/update-client/update-client.component';
import { ListDietComponent } from './components/diet/list-diet/list-diet.component';
import { UpdateDietComponent } from './components/diet/update-diet/update-diet.component';
import { CreateNutritionistComponent } from './components/nutritionist/create-nutritionist/create-nutritionist.component';
import { ListNutritionistComponent } from './components/nutritionist/list-nutritionist/list-nutritionist.component';
import { UpdateProfesionalProfileComponent } from './components/professional_profile/update-profesional-profile/update-profesional-profile.component';
import { CreateRecipeComponent } from './components/recipe/create-recipe/create-recipe.component';
import { ListRecipeComponent } from './components/recipe/list-recipe/list-recipe.component';
import { CreateRecommendationComponent } from './components/recommendation/create-recommendation/create-recommendation.component';
import { ListRecommendationComponent } from './components/recommendation/list-recommendation/list-recommendation.component';
import { UpdateRecommendationComponent } from './components/recommendation/update-recommendation/update-recommendation.component';
import { CreateSpecialtyComponent } from './components/specialty/create-specialty/create-specialty.component';
import { ListBillComponent } from './components/bill/list-bill/list-bill.component';
import { ListPaymentMethodComponent } from './components/payment_method/list-payment-method/list-payment-method.component';
import { CreatePaymentMethodComponent } from './components/payment_method/create-payment-method/create-payment-method.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MenuNutritionistComponent } from './menu-nutritionist/menu-nutritionist.component';
import { AvailableNutritionistsComponent } from './components/available-nutritionists/available-nutritionists.component';
import { NutritionistSelectedComponent } from './components/nutritionist-selected/nutritionist-selected.component';
import { NewAppointmentComponent } from './components/new-appointment/new-appointment.component';
import { UpdateNutritionistComponent } from './components/nutritionist/update-nutritionist/update-nutritionist.component';
import { PublishedRecommendationsComponent } from './components/nutritionist/published-recommendations/published-recommendations.component';
import { PublishedRecipesComponent } from './components/nutritionist/published-recipes/published-recipes.component';
import { AppointmentHistoryNutritionistComponent } from './components/nutritionist/appointment-history-nutritionist/appointment-history-nutritionist.component';
import { PendingAppointmentsComponent } from './components/nutritionist/pending-appointments/pending-appointments.component';
import { AppointmentHistoryClientComponent } from './components/client/appointment-history-client/appointment-history-client.component';
import { UpdateRecipeComponent } from './components/recipe/update-recipe/update-recipe.component';
import { ListDietNutritionistComponent } from './components/diet/list-diet-nutritionist/list-diet-nutritionist.component';
import { AddDietRecipesComponent } from './components/diet/add-diet-recipes/add-diet-recipes.component';
import { ViewNotesComponent } from './components/nutritionist/view-notes/view-notes.component';
import { UpdateNotesComponent } from './components/nutritionist/update-notes/update-notes.component';
import { ListRecipesNutritionistComponent } from './components/recipe/list-recipes-nutritionist/list-recipes-nutritionist.component';
import { FavoriteRecipesComponent } from './components/recipe/favorite-recipes/favorite-recipes.component';

const routes: Routes = [
  //COMPARTIDO

  {path: 'login', component: LoginComponent},
  {path: 'list-recommendations/:userType/:id', component: ListRecommendationComponent},

  //NUTRICIONISTA
  {path: 'menu-nutritionist/:id', component: MenuNutritionistComponent},

  {path: 'list-diet-nutritionist/:id', component: ListDietNutritionistComponent},
  {path: 'update-diet/:id/:nutritionistId/:appointmentId', component: UpdateDietComponent},
  {path: 'add-diet-recipes/:id/:appointmentId', component: AddDietRecipesComponent},
  {path: 'list-nutritionists/:id', component: ListNutritionistComponent},
  {path: 'new-nutritionist', component: CreateNutritionistComponent},
  {path: 'update-nutritionist/:id', component: UpdateNutritionistComponent},
  {path: 'pending-appointments/:id', component: PendingAppointmentsComponent},
  {path: 'appointments-history-nutritionist/:id', component: AppointmentHistoryNutritionistComponent},
  {path: 'published-recipes/:id', component: PublishedRecipesComponent},
  {path: 'published-recommendations/:id', component: PublishedRecommendationsComponent},
  {path: 'view-notes/:id', component: ViewNotesComponent},
  {path: 'update-notes/:id', component: UpdateNotesComponent},
  {path: 'update-professional-profile/:id', component: UpdateProfesionalProfileComponent},

  
  {path: 'list-recipes-nutritionist/:id', component: ListRecipesNutritionistComponent},
  {path: 'new-recipe/:nutritionistId', component: CreateRecipeComponent},
  {path: 'update-recipe/:id/:nutritionistId', component: UpdateRecipeComponent},

  {path: 'new-recommendation/:nutritionistId', component: CreateRecommendationComponent},
  {path: 'update-recommendation/:id/:nutritionistId', component: UpdateRecommendationComponent},

  {path: 'new-specialty/:id/:profileId', component: CreateSpecialtyComponent},


  //CLIENTE
  {path: 'menu/:id', component: MenuComponent},

  {path: 'list-clients/:id', component: ListClientComponent},
  {path: 'new-client', component: CreateClientComponent},
  {path: 'update-client/:id', component: UpdateClientComponent},
  
  {path: 'available-nutritionist/:id', component: AvailableNutritionistsComponent},
  {path: 'nutritionist-selected/:client_id/:nutritionist_id', component: NutritionistSelectedComponent},
  {path: 'new-appointment/:client_id/:nutritionist_id', component: NewAppointmentComponent},

  {path: 'appointments-history-client/:id', component: AppointmentHistoryClientComponent},
  {path: 'list-diet/:id', component: ListDietComponent},
  {path: 'list-recipes/:id', component: ListRecipeComponent},
  {path: 'favorite-recipes/:id', component: FavoriteRecipesComponent},


  {path: 'list-bills/:id', component: ListBillComponent},

  {path: 'list-payment-methods/:id', component: ListPaymentMethodComponent},
  {path: 'new-payment-method/:id', component: CreatePaymentMethodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
