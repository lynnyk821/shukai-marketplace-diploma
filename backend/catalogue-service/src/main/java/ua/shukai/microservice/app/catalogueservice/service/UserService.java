package ua.shukai.microservice.app.catalogueservice.service;

import ua.shukai.microservice.app.catalogueservice.database.entity.UserEntity;
import ua.shukai.microservice.app.catalogueservice.kafka.consumer.dto.KafkaUserDTO;

public interface UserService {
    void save(KafkaUserDTO dto);

    UserEntity findByIdOrThrow(Long userId);
}
