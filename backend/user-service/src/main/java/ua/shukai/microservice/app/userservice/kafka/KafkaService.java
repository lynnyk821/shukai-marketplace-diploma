package ua.shukai.microservice.app.userservice.kafka;

import ua.shukai.microservice.app.userservice.database.entity.UserEntity;

public interface KafkaService {
    void sendSignUpEvent(UserEntity user);

    void publishApprovedAdvertisement(String uuid);

    void publishRejectedAdvertisement(String uuid);
}
