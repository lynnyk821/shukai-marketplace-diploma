package ua.shukai.microservice.app.searchservice.consumer.dto;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class KafkaAdvertisementDTO {
    private Long id;
    private String name;
    private String image;
    private Integer price;
    private Long createAt;
    private String categoryName;
}
