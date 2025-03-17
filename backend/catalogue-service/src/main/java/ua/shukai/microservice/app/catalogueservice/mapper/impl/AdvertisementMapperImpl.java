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

    public GetAdvertisementDTO mapToGetAdvertisementDTO(AdvertisementEntity entity) {
        var user = new GetAdvertisementDTO.User("name", "image", "phoneNumber");
        var category = new GetAdvertisementDTO.Category(entity.getCategory().getName(), entity.getCategory().getPath());
        var region = new GetAdvertisementDTO.Region(entity.getRegion().getCityName(), entity.getRegion().getRegionName());

        List<String> images = this.imageMapper.toStringList(entity.getImages());

        List<String> deliveryMethods = entity.getDeliveryMethods().stream().map(
            deliveryMethod -> deliveryMethod.getDeliveryMethod().getMethod()
        ).toList();
        List<String> paymentMethods = entity.getPaymentMethods().stream().map(
                deliveryMethod -> deliveryMethod.getPaymentMethod().getMethod()
        ).toList();

        return GetAdvertisementDTO.builder()
                .createdAt(entity.getCreatedAt().toString())
                .name(entity.getName())
                .price(entity.getPrice())
                .description(entity.getDescription())
                .favoritesCount(entity.getFavoritesCount())
                .region(region)
                .user(user)
                .images(images)
                .category(category)
                .deliveryMethods(deliveryMethods)
                .paymentMethods(paymentMethods)
        .build();
    }

    public AdvertisementEntity mapToCreateAdvertisementDTO(CreateAdvertisementDTO dto, List<ImageEntity> images,
                                                           CategoryEntity category, UserEntity user, RegionEntity region,
                                                           List<PaymentMethodEntity> payments, List<DeliveryMethodEntity> deliveries
    ) {
        List<AdImageEntity> adImages = this.imageMapper.toListAdImage(images);
        List<AdPaymentMethodEntity> adPaymentMethods = this.paymentMethodMapper.map(payments);
        List<AdDeliveryMethodEntity> adDeliveryMethods = this.deliveryMethodMapper.map(deliveries);

        AdvertisementEntity advertisement = AdvertisementEntity.builder()
                .name(dto.getName())
                .description(dto.getDescription())
                .price(dto.getPrice())
                .images(adImages)
                .category(category)
                .user(user)
                .region(region)
                .paymentMethods(adPaymentMethods)
                .deliveryMethods(adDeliveryMethods)
        .build();

        adImages.forEach(image -> image.setAdvertisement(advertisement));
        adPaymentMethods.forEach(method -> method.setAdvertisement(advertisement));
        adDeliveryMethods.forEach(method -> method.setAdvertisement(advertisement));

        return advertisement;
    }


    public AdvertisementEntity mapToUpdateAdvertisementDTO(UpdateAdvertisementDTO dto) {
        return AdvertisementEntity.builder()
                .id(dto.getId())
                .name(dto.getName())
        .build();
    }
}
