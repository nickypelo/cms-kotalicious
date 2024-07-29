package com.kotalicious.food.controller;

import com.kotalicious.food.model.Ingredient;
import com.kotalicious.food.service.IngredientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("ingredient")
@RequiredArgsConstructor
public class IngredientController {
    private final IngredientService ingredientService;

    @PostMapping
    public ResponseEntity<Integer> saveIngredient(
            @RequestBody Ingredient request
        ){
        return ResponseEntity.ok(ingredientService.saveIngredient(request));
    }

    @GetMapping
    public ResponseEntity<List<Ingredient>> findAllIngredients(){
        return ResponseEntity.ok(ingredientService.findAllIngredients());
    }
}
