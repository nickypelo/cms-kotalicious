package com.kotalicious.food.service;

import com.kotalicious.food.model.Order;
import com.kotalicious.food.repository.OrderRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepo orderRepo;

    public Integer saveOrder(Order request) {
        Order order = orderRepo.save(request);

        return order.getId();
    }

    public List<Order> findAllOrders() {
        return orderRepo.findAll();
    }
}
