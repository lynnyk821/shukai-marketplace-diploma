package ua.shukai.microservice.app.userservice.kafka.producer;

import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.userservice.kafka.producer.dto.KafkaUserDTO;

@Component
@RequiredArgsConstructor
public class KafkaProducer {
    private final KafkaTemplate<String, KafkaUserDTO> template;

    public void send(String topic, KafkaUserDTO dto) {
        this.template.send(topic, dto);
        System.out.println("Message sent to topic: " + topic);
    }
}
