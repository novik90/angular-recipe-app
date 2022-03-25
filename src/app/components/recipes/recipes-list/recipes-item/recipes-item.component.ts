import { Component, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
	selector: 'app-recipes-item',
	templateUrl: './recipes-item.component.html',
	styleUrls: ['./recipes-item.component.css'],
})
export class RecipesItemComponent implements OnInit {
	@Input() recipe!: Recipe;
	@Input() index!: number;

	ngOnInit(): void {}
}
