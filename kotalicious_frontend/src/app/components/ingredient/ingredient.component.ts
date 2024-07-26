import { Component } from '@angular/core';
import { Ingredient } from 'src/app/services/models/ingredient';
import { IngredientService } from 'src/app/services/services/ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent {

  constructor(private ingredients: IngredientService){}

  myIngredients: Ingredient[] = this.ingredients.getAllIngredients();

  deleteIngredient = (item: string) =>{
    this.ingredients.deleteIngredient(item);
  }
}
