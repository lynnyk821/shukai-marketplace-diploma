package ua.shukai.microservice.app.catalogueservice.mapper;

import ua.shukai.microservice.app.catalogueservice.controller.home.dto.GetHomeAdsDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.AdvertisementEntity;

public interface HomeMapper {
    GetHomeAdsDTO.AdHome map(AdvertisementEntity entity);
}
