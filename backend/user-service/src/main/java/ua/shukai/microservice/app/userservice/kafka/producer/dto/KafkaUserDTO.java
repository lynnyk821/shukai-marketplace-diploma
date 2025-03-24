package ua.shukai.microservice.app.userservice.kafka.producer.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class KafkaUserDTO {
    private Long id;
    private String email;
    private String image;
    private String username;
    private String phoneNumber;
}
