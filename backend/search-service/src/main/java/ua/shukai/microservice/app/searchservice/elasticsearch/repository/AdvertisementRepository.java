package ua.shukai.microservice.app.searchservice.elasticsearch.repository;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import ua.shukai.microservice.app.searchservice.elasticsearch.model.Advertisement;

public interface AdvertisementRepository extends ElasticsearchRepository<Advertisement, Long> { }

