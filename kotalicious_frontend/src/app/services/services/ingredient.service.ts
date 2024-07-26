import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor() { }

  myIngredients: Ingredient[] = []
   // read - all
  //  getAllIngredients(): Ingredient[]{
  //   return this.ingredientService.getAllItems()
  //   .then((response: Ingredient[])=> this.ingredients = response)
  // }

  getAllIngredients(): Ingredient[]{
    return  this.myIngredients;
  }

  deleteIngredient(item: string){

  }
  
}
