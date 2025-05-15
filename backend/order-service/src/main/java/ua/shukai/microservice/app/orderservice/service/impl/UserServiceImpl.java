package ua.shukai.microservice.app.orderservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ua.shukai.microservice.app.orderservice.controller.order.dto.request.CreateOrderRequest;
import ua.shukai.microservice.app.orderservice.database.entity.UserEntity;
import ua.shukai.microservice.app.orderservice.database.repository.UserRepository;
import ua.shukai.microservice.app.orderservice.exception.custom.EntityNotFoundException;
import ua.shukai.microservice.app.orderservice.kafka.consumer.dto.KafkaUserDTO;
import ua.shukai.microservice.app.orderservice.service.UserService;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public UserEntity findByIdOrThrow(Long id) {
        return this.userRepository.findById(id).orElseThrow(
            () -> new EntityNotFoundException("Entity not found with id " + id)
        );
    }

    @Override
    public UserEntity findAndUpdateCustomer(CreateOrderRequest.Customer customer) {
        return this.userRepository.findById(customer.getId())
                .map(entity -> entity
                        .setFirstName(customer.getFirstName())
                        .setMiddleName(customer.getMiddleName())
                        .setLastName(customer.getLastName())
                        .setPhoneNumber(customer.getPhoneNumber())
                )
                .orElseThrow(() -> new EntityNotFoundException("Entity not found with id " + customer.getId()));
    }

    @Override
    public void save(KafkaUserDTO dto) {
        this.userRepository.save(UserEntity.builder()
                .id(dto.getId())
                .email(dto.getEmail())
                .username(dto.getUsername())
                .phoneNumber(dto.getPhoneNumber())
            .build()
        );
    }
}
