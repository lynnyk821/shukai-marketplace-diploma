package ua.shukai.microservice.app.catalogueservice.kafka.producer.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter @Setter
public class KafkaReviewAdvertisementDTO {
    private String uuid;
    private String title;
    private String description;
    private List<String> images;
    private String authorEmail;
}



