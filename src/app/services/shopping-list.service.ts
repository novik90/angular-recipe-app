import { Ingredient } from '../model/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
	ingredientsChanged = new Subject<Ingredient[]>();
	private ingredients: Ingredient[] = [];

	constructor() {}

	getIngredients() {
		return this.ingredients.slice();
	}

	addItgredient(ingredient: Ingredient) {
		event?.preventDefault();
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	addIngredients(ingredients: Ingredient[]) {
		// for (let ingredient of ingredients) {
		// 	this.addItgredient(ingredient);
		// }
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.next(this.ingredients.slice());
	}
}
