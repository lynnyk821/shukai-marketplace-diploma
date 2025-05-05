package ua.shukai.microservice.app.userservice.kafka.producer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.userservice.kafka.producer.dto.KafkaUserDTO;

@Slf4j
@Component
@RequiredArgsConstructor
public class KafkaProducer {
    private final KafkaTemplate<String, Object> template;

    public void send(String topic, Object dto) {
        this.template.send(topic, dto);
        System.out.println("Message sent to topic: " + topic);
    }
}
