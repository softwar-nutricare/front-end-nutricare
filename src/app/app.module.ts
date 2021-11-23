import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    ListClientComponent,
    UpdateClientComponent,
    ListDietComponent,
    UpdateDietComponent,
    CreateNutritionistComponent,
    ListNutritionistComponent,
    UpdateProfesionalProfileComponent,
    CreateRecipeComponent,
    ListRecipeComponent,
    CreateRecommendationComponent,
    ListRecommendationComponent,
    UpdateRecommendationComponent,
    CreateSpecialtyComponent,
    ListBillComponent,
    ListPaymentMethodComponent,
    CreatePaymentMethodComponent,
    LoginComponent,
    MenuComponent,
    MenuNutritionistComponent,
    AvailableNutritionistsComponent,
    NutritionistSelectedComponent,
    NewAppointmentComponent,
    UpdateNutritionistComponent,
    PublishedRecommendationsComponent,
    PublishedRecipesComponent,
    AppointmentHistoryNutritionistComponent,
    PendingAppointmentsComponent,
    AppointmentHistoryClientComponent,
    UpdateRecipeComponent,
    ListDietNutritionistComponent,
    AddDietRecipesComponent,
    ViewNotesComponent,
    UpdateNotesComponent,
    ListRecipesNutritionistComponent,
    FavoriteRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
