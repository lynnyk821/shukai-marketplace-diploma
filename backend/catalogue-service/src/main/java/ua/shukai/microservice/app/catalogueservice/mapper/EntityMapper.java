package ua.shukai.microservice.app.catalogueservice.mapper;

import ua.shukai.microservice.app.catalogueservice.database.entity.*;

import java.util.List;

public interface EntityMapper {
    List<String> toStringImageList(List<AdImageEntity> list);

    List<String> toStringDelvieryList(List<AdDeliveryMethodEntity> list);

    List<String> toStringPaymentList(List<AdPaymentMethodEntity> list);

    List<AdImageEntity> toAdImageEntityList(List<ImageEntity> list);

    List<AdDeliveryMethodEntity> toAdDeliveryMethodEntityList(List<DeliveryMethodEntity> list);

    List<AdPaymentMethodEntity> toAdPaymentMethodEntityList(List<PaymentMethodEntity> list);
}
