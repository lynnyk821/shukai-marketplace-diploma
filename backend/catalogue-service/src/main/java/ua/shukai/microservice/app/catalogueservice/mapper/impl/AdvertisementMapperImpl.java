package ua.shukai.microservice.app.catalogueservice.mapper.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.GetAdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.*;
import ua.shukai.microservice.app.catalogueservice.mapper.DeliveryMethodMapper;
import ua.shukai.microservice.app.catalogueservice.mapper.ImageMapper;
import ua.shukai.microservice.app.catalogueservice.mapper.PaymentMethodMapper;

import java.util.List;

@Component
@RequiredArgsConstructor
public class AdvertisementMapperImpl {
    private final ImageMapper imageMapper;
    private final PaymentMethodMapper paymentMethodMapper;
    private final DeliveryMethodMapper deliveryMethodMapper;

    public GetAdvertisementDTO map(AdvertisementEntity entity) {
        GetAdvertisementDTO.User user = new GetAdvertisementDTO.User(
            "name", "image", "phoneNumber"
        );

        GetAdvertisementDTO.Category category = new GetAdvertisementDTO.Category(
            entity.getCategory().getName(), entity.getCategory().getPath()
        );

        List<String> paymentMethods = this.paymentMethodMapper.toStringList(entity.getPaymentMethods());
        List<String> deliveryMethods = this.deliveryMethodMapper.toStringList(entity.getDeliveryMethods());
        List<String> images = this.imageMapper.toStringList(entity.getImages());

        return GetAdvertisementDTO.builder()
                .createdAt(entity.getCreatedAt().toString())
                .name(entity.getName())
                .price(entity.getPrice())
                .description(entity.getDescription())
                .favoritesCount(entity.getFavoritesCount())
                .user(user)
                .images(images)
                .category(category)
                .paymentMethods(paymentMethods)
                .deliveryMethods(deliveryMethods)
        .build();
    }

    public AdvertisementEntity map(
            CreateAdvertisementDTO dto, CategoryEntity category, List<ImageEntity> images,
            List<DeliveryMethodEntity> deliveryMethods, List<PaymentMethodEntity> paymentMethods
    ) {
        List<AdImageEntity> adImages = this.imageMapper.toListAdImage(images);
        List<AdPaymentMethodEntity> adPaymentMethods = this.paymentMethodMapper.map(paymentMethods);
        List<AdDeliveryMethodEntity> adDeliveryMethods = this.deliveryMethodMapper.map(deliveryMethods);

        AdvertisementEntity advertisement = AdvertisementEntity.builder()
                .name(dto.getName())
                .description(dto.getDescription())
                .price(dto.getPrice())
                .favoritesCount(dto.getFavoritesCount())
                .userId(dto.getUserId())
                .images(adImages)
                .category(category)
                .deliveryMethods(adDeliveryMethods)
                .paymentMethods(adPaymentMethods)
        .build();

        adDeliveryMethods.forEach(method -> method.setAdvertisement(advertisement));
        adPaymentMethods.forEach(method -> method.setAdvertisement(advertisement));
        adImages.forEach(image -> image.setAdvertisement(advertisement));

        return advertisement;
    }


    public AdvertisementEntity map(UpdateAdvertisementDTO dto) {
        return AdvertisementEntity.builder()
                .id(dto.getId())
                .name(dto.getName())
        .build();
    }
}
