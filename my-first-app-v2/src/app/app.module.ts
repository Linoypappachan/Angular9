import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
import { exampleDirectivesComponent } from './directive/exampleDirectives.component';
import { HighLightDirective } from './directive/highlight.directive';
import { HomeComponent } from './home/home.component';
import { RouterExampleComponent } from './routerExamples/routerExample.component';
import { AdvanceRoutingComponent } from './routerExamples/advance-routing/advance-routing.component';
import { UnlessDirective } from './directive/unless.directive';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    exampleDirectivesComponent,
    HighLightDirective,
    HomeComponent,
    RouterExampleComponent,
    AdvanceRoutingComponent,
    UnlessDirective,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
