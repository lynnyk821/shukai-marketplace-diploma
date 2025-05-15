package ua.shukai.microservice.app.orderservice.controller.order.dto.response;

import lombok.Builder;
import ua.shukai.microservice.app.orderservice.type.OrderStatus;

import java.sql.Timestamp;

@Builder
public record OrderDTO(
        String id,
        String title,
        String image,
        Integer price,
        Timestamp orderDate,
        OrderStatus status
) { }