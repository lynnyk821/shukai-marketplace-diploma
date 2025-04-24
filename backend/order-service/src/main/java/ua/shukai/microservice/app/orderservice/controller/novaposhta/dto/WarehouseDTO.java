package ua.shukai.microservice.app.orderservice.controller.novaposhta.dto;

import java.util.Map;

public record WarehouseDTO(String warehouse, Map<String, String> schedule) { }
