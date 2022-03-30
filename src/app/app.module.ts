import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './components/recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './components/recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './directive/dropdown.directive';
import { ShoppingListService } from './services/shopping-list.service';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		RecipesComponent,
		RecipesListComponent,
		RecipesDetailComponent,
		RecipesItemComponent,
		ShoppingListComponent,
		ShoppingEditComponent,
		DropdownDirective,
		RecipeStartComponent,
		RecipeEditComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [ShoppingListService],
	bootstrap: [AppComponent],
})
export class AppModule {}
