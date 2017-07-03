import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('Meat Cereal',
                   'This is simply the best',
                   'https://i.ytimg.com/vi/o0_uqcBZ6RU/maxresdefault.jpg',
                   [
                       new Ingredient('Meat', 1),
                       new Ingredient('Lucky Charms (boxes)', 10)
                   ]),
        new Recipe('Spaghetti Without Rabbits',
                   'A delicious medley of noodles and sauce, but hold the rabbits',
                   'http://del.h-cdn.co/assets/16/04/1600x800/landscape-1453913826-delish-creamy-spaghetti-3.jpg',
                   [
                       new Ingredient('Rabbits', 0),
                       new Ingredient('Spaghetti', 1)
                   ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}