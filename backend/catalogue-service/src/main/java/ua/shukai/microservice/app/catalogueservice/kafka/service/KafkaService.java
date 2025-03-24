package ua.shukai.microservice.app.catalogueservice.kafka.service;

import ua.shukai.microservice.app.catalogueservice.database.entity.AdvertisementEntity;

public interface KafkaService {
    void sendKafkaCreateAd(AdvertisementEntity ad);

    void sendKafkaUpdateAd(AdvertisementEntity ad);

    void sendKafkaDeleteAd(AdvertisementEntity ad);
}
