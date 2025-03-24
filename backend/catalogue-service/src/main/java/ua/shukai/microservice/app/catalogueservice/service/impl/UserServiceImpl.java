package ua.shukai.microservice.app.catalogueservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.shukai.microservice.app.catalogueservice.database.entity.UserEntity;
import ua.shukai.microservice.app.catalogueservice.database.repository.UserRepository;
import ua.shukai.microservice.app.catalogueservice.exception.custom.EntityNotFoundException;
import ua.shukai.microservice.app.catalogueservice.kafka.consumer.dto.KafkaUserDTO;
import ua.shukai.microservice.app.catalogueservice.service.UserService;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public void save(KafkaUserDTO dto) {
        this.userRepository.save(UserEntity.builder()
                .email(dto.getEmail())
                .image(dto.getImage())
                .username(dto.getUsername())
                .phoneNumber(dto.getPhoneNumber())
                .userId(dto.getId())
            .build()
        );
    }

    @Override
    public UserEntity findByIdOrThrow(Long userId) {
        return this.userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found: " + userId));
    }
}
