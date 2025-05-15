package ua.shukai.microservice.app.orderservice.controller.order.dto.response;

import java.util.List;

public record PurchasesResponse(List<OrderDTO> purchases, Integer totalPages) { }