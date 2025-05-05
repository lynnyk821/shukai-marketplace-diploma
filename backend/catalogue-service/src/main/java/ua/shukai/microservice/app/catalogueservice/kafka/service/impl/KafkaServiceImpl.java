package ua.shukai.microservice.app.catalogueservice.kafka.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ua.shukai.microservice.app.catalogueservice.database.entity.AdvertisementEntity;
import ua.shukai.microservice.app.catalogueservice.kafka.producer.KafkaProducer;
import ua.shukai.microservice.app.catalogueservice.kafka.producer.dto.KafkaAdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.kafka.producer.dto.KafkaReviewAdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.kafka.service.KafkaService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class KafkaServiceImpl implements KafkaService {
    private final KafkaProducer kafkaProducer;

    @Override
    public void publishCreateAdAfterApproved(AdvertisementEntity ad) {
        this.kafkaProducer.send("advertisement_create", KafkaAdvertisementDTO.builder()
                .uuid(ad.getUuid())
                .name(ad.getTitle())
                .price(ad.getPrice())
                .createAt(ad.getCreatedAt().getTime())
                .image(ad.getImages().getFirst().getImage().getBase64Image())
                .categoryName(ad.getCategory().getName())
                .build()
        );
    }

    @Override
    public void publishAdToUpdate(AdvertisementEntity ad) {
        this.kafkaProducer.send("advertisement_update", KafkaAdvertisementDTO.builder()
                .uuid(ad.getUuid())
                .name(ad.getTitle())
                .price(ad.getPrice())
                .createAt(ad.getCreatedAt().getTime())
                .image(ad.getImages().getFirst().getImage().getBase64Image())
                .categoryName(ad.getCategory().getName())
                .build()
        );
    }

    public void publishAdUuidToDelete(String uuid) {
        this.kafkaProducer.send("advertisement_delete", uuid);
    }

    @Override
    public void publishAdToReview(AdvertisementEntity ad) {
        List<String> images = ad.getImages().stream().map(entity -> entity.getImage().getBase64Image()).toList();
        this.kafkaProducer.send("advertisement_review", KafkaReviewAdvertisementDTO.builder()
                .uuid(ad.getUuid())
                .title(ad.getTitle())
                .description(ad.getDescription())
                .authorEmail(ad.getUser().getEmail().trim())
                .images(images)
            .build()
        );
    }
}
