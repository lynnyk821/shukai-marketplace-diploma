package ua.shukai.microservice.app.catalogueservice.mapper.impl;

import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.catalogueservice.database.entity.*;
import ua.shukai.microservice.app.catalogueservice.mapper.EntityMapper;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class EntityMapperImpl implements EntityMapper {

    @Override
    public List<String> toStringImageList(List<AdImageEntity> list) {
        return list.stream()
                .map(adImage -> adImage.getImage().getBase64Image())
                .collect(Collectors.toList());
    }

    @Override
    public List<String> toStringDelvieryList(List<AdDeliveryMethodEntity> list) {
        return list.stream()
                .map(adDelivery -> adDelivery.getDeliveryMethod().getMethod())
                .collect(Collectors.toList());
    }

    @Override
    public List<String> toStringPaymentList(List<AdPaymentMethodEntity> list) {
        return list.stream()
                .map(adPayment -> adPayment.getPaymentMethod().getMethod())
                .collect(Collectors.toList());
    }

    @Override
    public List<AdImageEntity> toAdImageEntityList(List<ImageEntity> list) {
        return list.stream()
                .map(image -> AdImageEntity.builder().image(image).build())
                .collect(Collectors.toList());
    }

    @Override
    public List<AdDeliveryMethodEntity> toAdDeliveryMethodEntityList(List<DeliveryMethodEntity> list) {
        return list.stream()
                .map(dm -> AdDeliveryMethodEntity.builder().deliveryMethod(dm).build())
                .collect(Collectors.toList());
    }

    @Override
    public List<AdPaymentMethodEntity> toAdPaymentMethodEntityList(List<PaymentMethodEntity> list) {
        return list.stream()
                .map(pm -> AdPaymentMethodEntity.builder().paymentMethod(pm).build())
                .collect(Collectors.toList());
    }
}
