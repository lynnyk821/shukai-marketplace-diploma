package ua.shukai.microservice.app.orderservice.service;

import org.springframework.data.domain.Pageable;
import ua.shukai.microservice.app.orderservice.controller.order.dto.request.CreateOrderRequest;
import ua.shukai.microservice.app.orderservice.controller.order.dto.request.UpdateOrderRequest;
import ua.shukai.microservice.app.orderservice.controller.order.dto.response.OrderDTO;
import ua.shukai.microservice.app.orderservice.controller.order.dto.response.PurchasesResponse;
import ua.shukai.microservice.app.orderservice.controller.order.dto.response.SalesResponse;

public interface OrderService {
    OrderDTO getById(String id);

    void create(CreateOrderRequest request);

    void updateById(String id, UpdateOrderRequest request);

    void deleteById(String id);

    PurchasesResponse getPurchasesByUserId(Long id, Pageable pageable);

    SalesResponse getSalesByUserId(Long id, Pageable pageable);
}
