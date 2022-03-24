import { EventEmitter } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';

export class ShoppingListService {
	ingredientsChanged = new EventEmitter<Ingredient[]>();
	private ingredients: Ingredient[] = [];

	constructor() {}

	getIngredients() {
		return this.ingredients.slice();
	}

	addItgredient(ingredient: Ingredient) {
		event?.preventDefault();
		this.ingredients.push(ingredient);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	addIngredients(ingredients: Ingredient[]) {
		// for (let ingredient of ingredients) {
		// 	this.addItgredient(ingredient);
		// }
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}
