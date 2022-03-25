import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import { Recipe } from '../model/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'My First Recipe',
			'This is a description of my recipe',
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F1%2FVeg-Food-Free-PNG-Image.png&f=1&nofb=1',
			[new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
		),
		new Recipe(
			'Big Fat Burger',
			'Great recipe for party',
			'https://www.pngkit.com/png/full/70-708058_chicken-fillet-nugget-snack-al-baik-fish-nuggets.png',
			[new Ingredient('Buns', 2), new Ingredient('Meat', 2)]
		),
	];

	constructor(private shoppingListService: ShoppingListService) {}

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.shoppingListService.addIngredients(ingredients);
	}
}
