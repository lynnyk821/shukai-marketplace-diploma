package ua.shukai.microservice.app.orderservice.service;

import ua.shukai.microservice.app.orderservice.controller.order.dto.request.CreateOrderRequest;
import ua.shukai.microservice.app.orderservice.database.entity.UserEntity;
import ua.shukai.microservice.app.orderservice.kafka.consumer.dto.KafkaUserDTO;

public interface UserService {
    UserEntity findByIdOrThrow(Long id);

    UserEntity findAndUpdateCustomer(CreateOrderRequest.Customer customer);

    void save(KafkaUserDTO dto);
}
