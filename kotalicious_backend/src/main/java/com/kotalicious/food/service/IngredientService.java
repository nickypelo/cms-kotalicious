package com.kotalicious.food.service;

import com.kotalicious.food.model.Ingredient;
import com.kotalicious.food.repository.IngredientRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class IngredientService {
    private final IngredientRepo ingredientRepo;

    public Integer saveIngredient(Ingredient request) {
        Ingredient ingredient = ingredientRepo.save(request);

        return ingredient.getId();
    }

    public List<Ingredient> findAllIngredients() {
        return ingredientRepo.findAll();
    }
}
