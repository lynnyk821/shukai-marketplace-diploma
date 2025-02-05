package ua.shukai.microservice.app.catalogueservice.mapper.impl;

import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.catalogueservice.database.entity.AdDeliveryMethodEntity;
import ua.shukai.microservice.app.catalogueservice.database.entity.DeliveryMethodEntity;
import ua.shukai.microservice.app.catalogueservice.mapper.DeliveryMethodMapper;

import java.util.List;

@Component
public class DeliveryMethodMapperImpl implements DeliveryMethodMapper {

    @Override
    public AdDeliveryMethodEntity map(DeliveryMethodEntity deliveryMethodEntity) {
        return AdDeliveryMethodEntity.builder().deliveryMethod(deliveryMethodEntity).build();
    }

    @Override
    public List<AdDeliveryMethodEntity> map(List<DeliveryMethodEntity> m) {
        return m.stream().map(this::map).toList();
    }

    public List<String> toStringList(List<AdDeliveryMethodEntity> adDeliveryMethodEntities) {
        return adDeliveryMethodEntities.stream().map(entity -> entity.getDeliveryMethod().getMethod()).toList();
    };
}
