import { Component, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, ViewWillEnter {
  
  recipes:Recipe[]

  constructor(private recipesService:RecipesService) { }

  ionViewWillEnter(): void {
    this.recipes = this.recipesService.getRecipes()
  }

  ngOnInit() {
    console.log("Page initialized...")
  }
  
}
