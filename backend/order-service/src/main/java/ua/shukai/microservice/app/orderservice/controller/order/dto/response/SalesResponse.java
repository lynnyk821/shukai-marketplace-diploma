package ua.shukai.microservice.app.orderservice.controller.order.dto.response;

import java.util.List;

public record SalesResponse(List<OrderDTO> sales, Integer totalPages) { }
