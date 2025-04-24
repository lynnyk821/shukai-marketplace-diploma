package ua.shukai.microservice.app.orderservice.service;

import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.orderservice.controller.novaposhta.dto.WarehouseDTO;

import java.util.List;

@Component
public interface NovaposhtaService {
    List<WarehouseDTO> getWarehousesByCityRef(String cityRef);
}