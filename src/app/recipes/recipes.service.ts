import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Samosa',
      imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe.jpg',
      ingredients: ['onion','potato']
    },
    {
      id: 'r2',
      title: 'Pakoda',
      imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/pakoda-recipe-480x270.jpg',
      ingredients: ['onion','flour']
    }
  ]

  public getRecipes(){
    return [...this.recipes]
  }

  public getRecipeById(recipeId:String){
    return {
      ...this.recipes.find(r=>{return r.id === recipeId})
    }
  }

  public deleteRecipe(recipeId:String){
    this.recipes = this.recipes.filter(r => {
      return r.id !== recipeId
    });
  }

  constructor() { }
}
