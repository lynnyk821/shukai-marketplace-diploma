package ua.shukai.microservice.app.orderservice.service;

import ua.shukai.microservice.app.orderservice.controller.order.dto.request.CreateOrderRequest;
import ua.shukai.microservice.app.orderservice.controller.order.dto.request.UpdateOrderRequest;
import ua.shukai.microservice.app.orderservice.controller.order.dto.OrderDTO;

public interface OrderService {
    OrderDTO getById(Long id);

    void create(CreateOrderRequest request);

    void updateById(Long id, UpdateOrderRequest request);

    void deleteById(Long id);
}
