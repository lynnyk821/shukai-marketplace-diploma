package ua.shukai.microservice.app.catalogueservice.kafka.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ua.shukai.microservice.app.catalogueservice.database.entity.AdvertisementEntity;
import ua.shukai.microservice.app.catalogueservice.kafka.producer.KafkaProducer;
import ua.shukai.microservice.app.catalogueservice.kafka.producer.dto.KafkaAdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.kafka.service.KafkaService;

@Service
@RequiredArgsConstructor
public class KafkaServiceImpl implements KafkaService {
    private final KafkaProducer kafkaProducer;

    @Override
    public void sendKafkaCreateAd(AdvertisementEntity ad) {
        this.kafkaProducer.send("crt-ad", KafkaAdvertisementDTO.builder()
                .id(ad.getId())
                .name(ad.getName())
                .price(ad.getPrice())
                .createAt(ad.getCreatedAt().getTime())
                .image(ad.getImages().getFirst().getImage().getBase64Image())
                .categoryName(ad.getCategory().getName())
                .build()
        );
    }

    @Override
    public void sendKafkaUpdateAd(AdvertisementEntity ad) {
        this.kafkaProducer.send("upd-ad", KafkaAdvertisementDTO.builder()
                .id(ad.getId())
                .name(ad.getName())
                .price(ad.getPrice())
                .createAt(ad.getCreatedAt().getTime())
                .image(ad.getImages().getFirst().getImage().getBase64Image())
                .categoryName(ad.getCategory().getName())
                .build()
        );
    }

    @Override
    public void sendKafkaDeleteAd(AdvertisementEntity ad) {
        this.kafkaProducer.send("dlt-ad", ad.getId().toString());
    }
}
