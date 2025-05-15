package ua.shukai.microservice.app.userservice.kafka.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ua.shukai.microservice.app.userservice.database.entity.UserEntity;
import ua.shukai.microservice.app.userservice.kafka.KafkaService;
import ua.shukai.microservice.app.userservice.kafka.producer.KafkaProducer;
import ua.shukai.microservice.app.userservice.kafka.producer.dto.KafkaUserDTO;

@Service
@RequiredArgsConstructor
public class KafkaServiceImpl implements KafkaService {
    private final KafkaProducer kafkaProducer;

    @Override
    public void sendSignUpEventForCatalogueService(UserEntity user) {
        this.kafkaProducer.send("sign-up-catalogue", KafkaUserDTO.builder()
                .id(user.getId())
                .email(user.getEmail())
                .username(user.getUsername())
                .phoneNumber(user.getPhoneNumber())
            .build()
        );
    }

    @Override
    public void sendSignUpEventForOrderService(UserEntity user) {
        this.kafkaProducer.send("sign-up-order", KafkaUserDTO.builder()
                .id(user.getId())
                .email(user.getEmail())
                .username(user.getUsername())
                .phoneNumber(user.getPhoneNumber())
            .build()
        );
    }

    @Override
    public void publishApprovedAdvertisement(String uuid) {
        this.kafkaProducer.send("advertisement_approved", uuid);
    }

    @Override
    public void publishRejectedAdvertisement(String uuid) {
        this.kafkaProducer.send("advertisement_rejected", uuid);
    }
}
