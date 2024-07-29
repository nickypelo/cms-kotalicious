package com.kotalicious.food.controller;

import com.kotalicious.food.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.kotalicious.food.model.Product;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @PostMapping
    public ResponseEntity<Integer> saveProduct(
            @RequestBody Product request,
            @RequestParam("image")MultipartFile file
            ){
        return ResponseEntity.ok(productService.saveProduct(request, file));
    }

    @GetMapping
    public ResponseEntity<List<Product>> findAllProducts(){
        return ResponseEntity.ok(productService.findAllProducts());
    }
}
