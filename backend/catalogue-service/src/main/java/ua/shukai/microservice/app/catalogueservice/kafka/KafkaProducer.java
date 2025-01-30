package ua.shukai.microservice.app.catalogueservice.kafka;

import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class KafkaProducer {
    private final KafkaTemplate<String, String> kafkaTemplate;

    public void send(String key, String message) {
        this.kafkaTemplate.send(key, message);
        System.out.println("Отправлено сообщение в Kafka: " + message);
    }
}
