package ua.shukai.microservice.app.userservice.kafka.consumer.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.util.List;

@Builder
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class KafkaReviewAdvertisementDTO {
    private String uuid;
    private String title;
    private String description;
    private List<String> images;
    private String authorEmail;
}
