package ua.shukai.microservice.app.catalogueservice.kafka.producer;

import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class KafkaProducer {
    private final KafkaTemplate<String, Object> template;

    public void send(String topic, Object dto) {
        this.template.send(topic, dto);
        System.out.println("Message sent to topic: " + topic);
    }
}
