package ua.shukai.microservice.app.orderservice.kafka.consumer.dto;

import lombok.Data;

@Data
public class KafkaUserDTO {
    private Long id;
    private String email;
    private String image;
    private String username;
    private String phoneNumber;
}
