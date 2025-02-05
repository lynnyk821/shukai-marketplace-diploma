package ua.shukai.microservice.app.searchservice.mapper.impl;

import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.searchservice.consumer.dto.KafkaAdvertisementDTO;
import ua.shukai.microservice.app.searchservice.controller.dto.SearchAdvertisementDTO;
import ua.shukai.microservice.app.searchservice.elasticsearch.model.Advertisement;
import ua.shukai.microservice.app.searchservice.mapper.AdvertisementMapper;


@Component
public class AdvertisementMapperImpl implements AdvertisementMapper {

    @Override
    public Advertisement map(KafkaAdvertisementDTO dto) {
        return Advertisement.builder()
                .id(dto.getId())
                .name(dto.getName())
                .price(dto.getPrice())
                .image(dto.getImage())
                .createdAt(dto.getCreateAt())
                .categoryName(dto.getCategoryName())
        .build();
    }

    @Override
    public SearchAdvertisementDTO map(Advertisement advertisement) {
        return SearchAdvertisementDTO.builder()
                .id(advertisement.getId())
                .name(advertisement.getName())
                .price(advertisement.getPrice())
                .image(advertisement.getImage())
                .createdAt(advertisement.getCreatedAt().toString())
                .categoryName(advertisement.getCategoryName())
        .build();
    }
}
