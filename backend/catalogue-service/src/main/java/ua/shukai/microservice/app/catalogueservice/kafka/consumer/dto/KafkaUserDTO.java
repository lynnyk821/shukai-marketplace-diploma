package ua.shukai.microservice.app.catalogueservice.kafka.consumer.dto;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class KafkaUserDTO {
    private Long id;
    private String username;
    private String phoneNumber;
    private String region;
    private String userImage;
    private Timestamp visitingTime;
}
