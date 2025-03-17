package ua.shukai.microservice.app.catalogueservice.mapper.impl;

import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.catalogueservice.controller.home.dto.GetHomeAdsDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.AdvertisementEntity;
import ua.shukai.microservice.app.catalogueservice.mapper.HomeMapper;

@Component
public class HomeMapperImpl implements HomeMapper {

    @Override
    public GetHomeAdsDTO.AdHome map(AdvertisementEntity ad) {
        return GetHomeAdsDTO.AdHome.builder()
                .id(ad.getId())
                .name(ad.getName())
                .image(ad.getImages().getFirst().getImage().getBase64Image())
                .price(ad.getPrice())
                .createdAt(ad.getCreatedAt().toString())
        .build();
    }
}
