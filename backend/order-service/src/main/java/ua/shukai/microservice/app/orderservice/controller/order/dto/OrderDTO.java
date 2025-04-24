package ua.shukai.microservice.app.orderservice.controller.order.dto;

import jakarta.validation.constraints.NotNull;

public record OrderDTO(@NotNull Long id, @NotNull AdDTO adDTO) { }
