package ua.shukai.microservice.app.userservice.kafka.consumer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
import ua.shukai.microservice.app.userservice.kafka.consumer.dto.KafkaReviewAdvertisementDTO;
import ua.shukai.microservice.app.userservice.service.AdvertisementService;

@Slf4j
@Service
@RequiredArgsConstructor
public class KafkaAdvertisementConsumer {
    private final AdvertisementService advertisementService;

    @KafkaListener(topics = "advertisement_review", groupId = "review-group")
    public void listenAdvertisementForReview(ConsumerRecord<String, KafkaReviewAdvertisementDTO> record) {
        try {
            this.advertisementService.saveAdvertisementForReview(record.value());
        } catch (Exception e) {
            log.error("Failed to process message: {}", record.value().getTitle(), e);
            throw e;
        }
    }
}
