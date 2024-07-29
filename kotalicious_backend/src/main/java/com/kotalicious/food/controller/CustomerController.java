package com.kotalicious.food.controller;

import com.kotalicious.food.model.Customer;
import com.kotalicious.food.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("customer")
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping
    public ResponseEntity<Integer> saveCustomer(
            @RequestBody Customer request
    ){
        return ResponseEntity.ok(customerService.save(request));
    }

    @GetMapping
    public ResponseEntity<List<Customer>> findAllCustomers(){
        return ResponseEntity.ok(customerService.findAllCustomers());
    }
}
