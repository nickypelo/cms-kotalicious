package com.kotalicious.food.service;

import com.kotalicious.food.model.Customer;
import com.kotalicious.food.repository.CustomerRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepo customerRepo;

    public Integer save(Customer request) {
        Customer customer = customerRepo.save(request);
        return customer.getId();
    }

    public List<Customer> findAllCustomers() {

        return customerRepo.findAll();
    }
}
