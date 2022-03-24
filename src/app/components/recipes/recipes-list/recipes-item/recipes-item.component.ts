import { Component, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
	selector: 'app-recipes-item',
	templateUrl: './recipes-item.component.html',
	styleUrls: ['./recipes-item.component.css'],
})
export class RecipesItemComponent implements OnInit {
	@Input() recipe!: Recipe;

	constructor(private recipeService: RecipeService) {}

	ngOnInit(): void {}

	onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }
}
