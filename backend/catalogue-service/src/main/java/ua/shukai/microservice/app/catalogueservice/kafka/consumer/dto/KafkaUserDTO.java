package ua.shukai.microservice.app.catalogueservice.kafka.consumer.dto;

import lombok.Data;

@Data
public class KafkaUserDTO {
    private Long id;
    private String email;
    private String image;
    private String username;
    private String phoneNumber;
}
