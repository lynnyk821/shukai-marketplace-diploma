package ua.shukai.microservice.app.searchservice.mapper;

import ua.shukai.microservice.app.searchservice.consumer.dto.KafkaAdvertisementDTO;
import ua.shukai.microservice.app.searchservice.controller.dto.SearchAdvertisementDTO;
import ua.shukai.microservice.app.searchservice.elasticsearch.model.Advertisement;

public interface AdvertisementMapper {
    Advertisement map(KafkaAdvertisementDTO dto);

    SearchAdvertisementDTO map(Advertisement advertisementDocument);
}
