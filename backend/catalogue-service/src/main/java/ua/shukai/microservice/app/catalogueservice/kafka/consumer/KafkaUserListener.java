package ua.shukai.microservice.app.catalogueservice.kafka.consumer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.catalogueservice.exception.custom.EntityNotFoundException;
import ua.shukai.microservice.app.catalogueservice.kafka.consumer.dto.KafkaUserDTO;
import ua.shukai.microservice.app.catalogueservice.service.CatalogueService;
import ua.shukai.microservice.app.catalogueservice.service.UserService;

@Slf4j
@Component
@RequiredArgsConstructor
public class KafkaUserListener {
    private final UserService userService;
    private final CatalogueService catalogueService;

    @KafkaListener(
            topics = "sign-up",
            groupId = "user-group",
            containerFactory = "kafkaUserDTOListenerContainerFactory"
    )
    public void listenSignUp(ConsumerRecord<String, KafkaUserDTO> dto) {
        log.info("Received record: {}", dto.value());
        this.userService.save(dto.value());
    }

    @KafkaListener(topics = "advertisement_approved")
    public void listenApprovedAdUuid(String uuid) {
        uuid = uuid.replaceAll("\"", "");
        log.info("Processing approval for ad: {}", uuid);
        try {
            this.catalogueService.updateStatusAndPublish(uuid);
        } catch (EntityNotFoundException e) {
            log.error("Advertisement {} not found in catalogue-service", uuid);
        }
    }

    @KafkaListener(topics = "advertisement_rejected")
    public void listenRejectedAdUuid(String uuid) {
        uuid = uuid.replaceAll("\"", "");
        this.catalogueService.deleteById(uuid);
    }
}
