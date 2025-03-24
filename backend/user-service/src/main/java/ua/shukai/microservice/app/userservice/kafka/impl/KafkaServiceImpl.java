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
    public void sendSignUpEvent(UserEntity user) {
        this.kafkaProducer.send("sign-up", KafkaUserDTO.builder()
                .id(user.getId())
                .email(user.getEmail())
                .username(user.getUsername())
                .phoneNumber(user.getPhoneNumber())
            .build()
        );
    }

}
