package ua.shukai.microservice.app.catalogueservice.kafka.consumer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.catalogueservice.kafka.consumer.dto.KafkaUserDTO;

@Slf4j
@Component
@RequiredArgsConstructor
public class KafkaUserListener {
    /*private final UserService userService;*/

    @KafkaListener(topics = "1user", groupId = "user-group")
    public void listen(ConsumerRecord<String, KafkaUserDTO> kafkaDTO) {
        log.info("Received record: {}", kafkaDTO.value());
        /*this.userService.create(kafkaDTO.value());*/
    }
}
