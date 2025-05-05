package ua.shukai.microservice.app.userservice.service;

import org.springframework.data.domain.Pageable;
import ua.shukai.microservice.app.userservice.controller.admin.dto.ReviewAdvertisementDTO;
import ua.shukai.microservice.app.userservice.controller.admin.dto.ReviewAdvertisementResponse;
import ua.shukai.microservice.app.userservice.kafka.consumer.dto.KafkaReviewAdvertisementDTO;

public interface AdvertisementService {
    ReviewAdvertisementResponse getNewAdvertisements(Pageable pageable);

    ReviewAdvertisementDTO getAdvertisementById(String uuid);

    void approveAdvertisement(String uuid);

    void rejectAdvertisement(String uuid);

    void saveAdvertisementForReview(KafkaReviewAdvertisementDTO dto);
}
