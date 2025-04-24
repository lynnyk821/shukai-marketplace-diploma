package ua.shukai.microservice.app.orderservice.mapper;

import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.orderservice.controller.order.dto.AdDTO;
import ua.shukai.microservice.app.orderservice.database.entity.AdEntity;

@Component
public class EntityMapper {
    public AdDTO entityToAdDTO(AdEntity entity) {
        return new AdDTO(entity.getId(), entity.getName(), entity.getPrice());
    }
}
