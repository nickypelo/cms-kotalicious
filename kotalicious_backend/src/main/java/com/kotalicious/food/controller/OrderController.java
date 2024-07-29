package com.kotalicious.food.controller;

import com.kotalicious.food.model.Order;

import com.kotalicious.food.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("order")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<Integer> saveOrder(
            @RequestBody Order request
    ){
        return ResponseEntity.ok(orderService.saveOrder(request));
    }

    @GetMapping
    public ResponseEntity<List<Order>> findAllOrders(){
        return ResponseEntity.ok(orderService.findAllOrders());
    }
}
