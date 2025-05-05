package ua.shukai.microservice.app.catalogueservice.kafka.service;

import ua.shukai.microservice.app.catalogueservice.database.entity.AdvertisementEntity;

public interface KafkaService {
    void publishCreateAdAfterApproved(AdvertisementEntity ad);

    void publishAdToUpdate(AdvertisementEntity ad);

    void publishAdUuidToDelete(String uuid);

    void publishAdToReview(AdvertisementEntity ad);
}
