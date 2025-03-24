package ua.shukai.microservice.app.catalogueservice.kafka.producer;

import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.catalogueservice.kafka.producer.dto.KafkaAdvertisementDTO;

@Component
@RequiredArgsConstructor
public class KafkaProducer {
    private final KafkaTemplate<String, Object> template;

    public void send(String topic, KafkaAdvertisementDTO dto) {
        this.template.send(topic, dto);
        System.out.println("Message sent to topic: " + topic);
    }

    public void send(String topic, String message) {
        this.template.send(topic, message);
        System.out.println("Message sent to topic: " + topic);
    }
}
