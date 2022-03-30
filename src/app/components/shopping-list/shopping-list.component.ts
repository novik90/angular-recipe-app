import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
	ingredients!: Ingredient[];
	private igChangeSub!: Subscription;

	constructor(private shoppingListService: ShoppingListService) {}

	ngOnInit(): void {
		this.ingredients = this.shoppingListService.getIngredients();
		this.igChangeSub =
			this.shoppingListService.ingredientsChanged.subscribe(
				(ingredients: Ingredient[]) => {
					this.ingredients = ingredients;
				}
			);
	}

	onEditItem(index: number) {
		event?.preventDefault();
		this.shoppingListService.startedEditing.next(index);
	}

	ngOnDestroy(): void {
		this.igChangeSub.unsubscribe();
	}
}
