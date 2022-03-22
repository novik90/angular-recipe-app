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
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fmrtrending0475.jpg%3Fitok%3D-tA_cB-C&f=1&nofb=1'
		),
	];

	constructor() {}

	ngOnInit(): void {}
}
