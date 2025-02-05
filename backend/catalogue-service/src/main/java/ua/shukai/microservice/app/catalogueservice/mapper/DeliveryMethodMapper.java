package ua.shukai.microservice.app.catalogueservice.mapper;

import ua.shukai.microservice.app.catalogueservice.database.entity.AdDeliveryMethodEntity;
import ua.shukai.microservice.app.catalogueservice.database.entity.DeliveryMethodEntity;

import java.util.List;

public interface DeliveryMethodMapper {

    AdDeliveryMethodEntity map(DeliveryMethodEntity m);

    List<AdDeliveryMethodEntity> map(List<DeliveryMethodEntity> m);

    List<String> toStringList(List<AdDeliveryMethodEntity> adDeliveryMethodEntities);
}
