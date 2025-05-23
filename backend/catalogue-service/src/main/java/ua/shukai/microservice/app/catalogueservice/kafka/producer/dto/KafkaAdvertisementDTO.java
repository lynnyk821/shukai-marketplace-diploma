package ua.shukai.microservice.app.catalogueservice.kafka.producer.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class KafkaAdvertisementDTO {
    private String uuid;
    private String name;
    private String image;
    private Integer price;
    private Long createAt;
    private String categoryName;
}
