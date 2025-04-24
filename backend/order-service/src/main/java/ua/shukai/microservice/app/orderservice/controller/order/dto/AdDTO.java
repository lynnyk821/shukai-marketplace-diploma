package ua.shukai.microservice.app.orderservice.controller.order.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public record AdDTO(
        @NotNull @Min(0) Long id,
        @NotNull String name,
        @NotNull Integer price
) { }
