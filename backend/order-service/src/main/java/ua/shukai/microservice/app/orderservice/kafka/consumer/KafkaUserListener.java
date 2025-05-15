package ua.shukai.microservice.app.orderservice.kafka.consumer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.orderservice.kafka.consumer.dto.KafkaUserDTO;
import ua.shukai.microservice.app.orderservice.service.UserService;

@Slf4j
@Component
@RequiredArgsConstructor
public class KafkaUserListener {
    private final UserService userService;

    @KafkaListener(topics = "sign-up-order", groupId = "user-group")
    public void listenSignUp(ConsumerRecord<String, KafkaUserDTO> dto) {
        log.info("Received record: {}", dto.value());
        this.userService.save(dto.value());
    }
}
