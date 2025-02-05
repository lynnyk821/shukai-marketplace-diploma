package ua.shukai.microservice.app.searchservice.service;

import org.springframework.data.domain.Pageable;
import ua.shukai.microservice.app.searchservice.consumer.dto.KafkaAdvertisementDTO;
import ua.shukai.microservice.app.searchservice.controller.dto.SearchAdvertisementDTO;

import java.util.List;

public interface SearchService {
    void create(KafkaAdvertisementDTO dto);

    List<SearchAdvertisementDTO> findAll(String value, String category,
                                         Integer priceFrom, Integer priceTo, Pageable pageable
    );
}
