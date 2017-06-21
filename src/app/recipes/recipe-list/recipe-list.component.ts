import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('a Testipe', 'this is a test',
        'http://spoonforkbacon.com/wordpress/wp-content/uploads/2012/08/achiote-grilled-fish-taco-recipe1.jpg'),
        new Recipe('a Testipe', 'this is a test',
        'http://spoonforkbacon.com/wordpress/wp-content/uploads/2012/08/achiote-grilled-fish-taco-recipe1.jpg')
    ];

    constructor() { }

    ngOnInit() {
    }

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}
