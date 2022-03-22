import { Component, OnInit } from '@angular/core';

import { Recipe } from 'src/app/model/recipe.model';

@Component({
	selector: 'app-recipes-list',
	templateUrl: './recipes-list.component.html',
	styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe(
			'My First Recipe',
			'This is a description of my recipe',
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F1%2FVeg-Food-Free-PNG-Image.png&f=1&nofb=1'
		),
    new Recipe(
			'My Second Recipe',
			'Great recipe for party',
			'https://www.pngkit.com/png/full/70-708058_chicken-fillet-nugget-snack-al-baik-fish-nuggets.png'
		),
	];

	constructor() {}

	ngOnInit(): void {}
}
