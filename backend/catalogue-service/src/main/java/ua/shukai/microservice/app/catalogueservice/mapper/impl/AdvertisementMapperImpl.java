package ua.shukai.microservice.app.catalogueservice.mapper.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.AdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.GetAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.home.dto.GetHomeAdsDTO;
import ua.shukai.microservice.app.catalogueservice.controller.region.dto.RegionDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.*;
import ua.shukai.microservice.app.catalogueservice.mapper.AdvertisementMapper;
import ua.shukai.microservice.app.catalogueservice.mapper.EntityMapper;
import ua.shukai.microservice.app.catalogueservice.types.AdvertisementStatus;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class AdvertisementMapperImpl implements AdvertisementMapper {
    private final EntityMapper entityMapper;

    @Override
    public AdvertisementDTO mapToAdDTO(AdvertisementEntity ad) {
        List<String> images = this.entityMapper.toStringImageList(ad.getImages());
        List<String> deliveryMethods = this.entityMapper.toStringDelvieryList(ad.getDeliveryMethods());
        List<String> paymentMethods = this.entityMapper.toStringPaymentList(ad.getPaymentMethods());

        return AdvertisementDTO.builder()
                .id(ad.getUuid())
                .createdAt(ad.getCreatedAt().toString())
                .title(ad.getTitle())
                .price(ad.getPrice())
                .description(ad.getDescription())
                .favoritesCount(ad.getFavoritesCount())
                .images(images)
                .region(RegionDTO.builder()
                        .cityName(ad.getRegion().getCityName())
                        .regionName(ad.getRegion().getRegionName())
                        .build())
                .user(AdvertisementDTO.User.builder()
                        .id(ad.getUser().getId())
                        .name(ad.getUser().getUsername())
                        .image(ad.getUser().getImage())
                        .phoneNumber(ad.getUser().getPhoneNumber())
                        .build())
                .category(AdvertisementDTO.Category.builder()
                        .name(ad.getCategory().getName())
                        .path(ad.getCategory().getPath())
                        .build())
                .deliveryMethods(deliveryMethods)
                .paymentMethods(paymentMethods)
                .build();
    }

    @Override
    public List<GetAdDTO.MoreAd> mapToMoreAds(List<AdvertisementEntity> ads) {
        return ads.stream()
                .map(advertisement -> GetAdDTO.MoreAd.builder()
                        .id(advertisement.getUuid())
                        .title(advertisement.getTitle())
                        .price(advertisement.getPrice())
                        .image(advertisement.getImages().getFirst().getImage().getBase64Image()).build())
                .collect(Collectors.toList());
    }

    @Override
    public GetHomeAdsDTO.AdHome mapAdHome(AdvertisementEntity ad) {
        return GetHomeAdsDTO.AdHome.builder()
                .id(ad.getUuid())
                .title(ad.getTitle())
                .image(ad.getImages().getFirst().getImage().getBase64Image())
                .price(ad.getPrice())
                .createdAt(ad.getCreatedAt().toString())
        .build();
    }

    @Override
    public AdvertisementEntity mapToEntity(CreateAdDTO dto, UserEntity user, RegionEntity region, CategoryEntity category,
                                           List<ImageEntity> images, List<DeliveryMethodEntity> deliveries, List<PaymentMethodEntity> payments
    ) {
        List<AdImageEntity> adImages = this.entityMapper.toAdImageEntityList(images);
        List<AdPaymentMethodEntity> adPaymentMethods = this.entityMapper.toAdPaymentMethodEntityList(payments);
        List<AdDeliveryMethodEntity> adDeliveryMethods = this.entityMapper.toAdDeliveryMethodEntityList(deliveries);

        AdvertisementEntity advertisement = AdvertisementEntity.builder()
                .user(user)
                .region(region)
                .category(category)
                .title(dto.getTitle())
                .price(dto.getPrice())
                .status(AdvertisementStatus.PENDING)
                .description(dto.getDescription())
                .images(adImages)
                .paymentMethods(adPaymentMethods)
                .deliveryMethods(adDeliveryMethods)
        .build();

        adImages.forEach(image -> image.setAdvertisement(advertisement));
        adPaymentMethods.forEach(method -> method.setAdvertisement(advertisement));
        adDeliveryMethods.forEach(method -> method.setAdvertisement(advertisement));

        return advertisement;
    }

    @Override
    public AdvertisementEntity mapToEntity(AdvertisementEntity ad, UpdateAdDTO dto, RegionEntity region, CategoryEntity category,
                                           List<DeliveryMethodEntity> deliveries, List<PaymentMethodEntity> payments
    ) {
        List<AdPaymentMethodEntity> adPaymentMethods = this.entityMapper.toAdPaymentMethodEntityList(payments);
        List<AdDeliveryMethodEntity> adDeliveryMethods = this.entityMapper.toAdDeliveryMethodEntityList(deliveries);

        ad
                .setRegion(region)
                .setCategory(category)
                .setTitle(dto.getTitle())
                .setPrice(dto.getPrice())
                .setDescription(dto.getDescription())
                .setPaymentMethods(adPaymentMethods)
                .setDeliveryMethods(adDeliveryMethods)
        ;

        adPaymentMethods.forEach(method -> method.setAdvertisement(ad));
        adDeliveryMethods.forEach(method -> method.setAdvertisement(ad));

        return ad;
    }
}
