import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe:Recipe;

  constructor(private activatedRoute:ActivatedRoute, 
    private recipeService:RecipesService, 
    private router:Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId')
      this.loadedRecipe = this.recipeService.getRecipeById(recipeId);
    });
  }

  onDeleteItem(){

    this.alertController.create({header:'Are you sure?', message:'Do you really want to delete?',
  buttons:[
    {
      text:'Cancel', 
      role:'cancel'
    },
    {
      text:'Delete',
      handler: ()=>{
        this.recipeService.deleteRecipe(this.loadedRecipe.id)
        this.router.navigate(['/recipes'])
      }
    }
  ]}).then(el => {
    el.present();
  })
  }

}
