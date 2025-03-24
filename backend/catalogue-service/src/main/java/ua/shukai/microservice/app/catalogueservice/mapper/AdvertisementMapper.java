package ua.shukai.microservice.app.catalogueservice.mapper;

import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.AdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.GetAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.home.dto.GetHomeAdsDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.*;

import java.util.List;

public interface AdvertisementMapper {
    AdvertisementDTO mapToAdDTO(AdvertisementEntity ad);

    List<GetAdDTO.MoreAd> mapToMoreAds(List<AdvertisementEntity> ads);

    GetHomeAdsDTO.AdHome mapAdHome(AdvertisementEntity ad);

    AdvertisementEntity mapToEntity(CreateAdDTO dto, UserEntity user, RegionEntity region, CategoryEntity category,
                                    List<ImageEntity> images, List<DeliveryMethodEntity> deliveries, List<PaymentMethodEntity> payments);

    AdvertisementEntity mapToEntity(AdvertisementEntity ad, UpdateAdDTO dto, RegionEntity region, CategoryEntity category,
                                    List<DeliveryMethodEntity> deliveries, List<PaymentMethodEntity> payments);
}
