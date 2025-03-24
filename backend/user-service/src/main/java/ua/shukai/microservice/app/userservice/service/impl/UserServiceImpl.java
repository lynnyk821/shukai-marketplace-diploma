package ua.shukai.microservice.app.userservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.shukai.microservice.app.userservice.controller.request.SignUpRequest;
import ua.shukai.microservice.app.userservice.controller.response.MeDTO;
import ua.shukai.microservice.app.userservice.database.entity.ImageEntity;
import ua.shukai.microservice.app.userservice.database.entity.UserEntity;
import ua.shukai.microservice.app.userservice.database.repository.ImageRepository;
import ua.shukai.microservice.app.userservice.database.repository.UserRepository;
import ua.shukai.microservice.app.userservice.exception.custom.EntityNotFoundException;
import ua.shukai.microservice.app.userservice.jwt.JwtService;
import ua.shukai.microservice.app.userservice.service.UserService;
import ua.shukai.microservice.app.userservice.utils.PasswordEncoderHolder;
import ua.shukai.microservice.app.userservice.utils.RequestUtils;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final JwtService jwtService;
    private final UserRepository userRepository;
    private final ImageRepository imageRepository;

    @Override
    public UserEntity findByEmailOrThrow(String email) {
        return this.userRepository.findByEmail(email).orElseThrow(
            () -> new EntityNotFoundException("User with email " + email + " not found")
        );
    }

    @Override
    public boolean existsByEmail(String email) {
        return this.userRepository.findByEmail(email).isPresent();
    }

    @Override
    @Transactional
    public UserEntity create(SignUpRequest request) {
        String password = PasswordEncoderHolder.encode(request.getPassword());

        ImageEntity imageEntity = ImageEntity.builder().imageBase64(null).build();
        this.imageRepository.save(imageEntity);

        UserEntity user = UserEntity.builder()
                .password(password)
                .email(request.getEmail())
                .username(request.getUsername())
                .phoneNumber(request.getPhoneNumber())
                .image(imageEntity)
        .build();

        return this.userRepository.save(user);
    }

    @Override
    public MeDTO getMeDTO(HttpHeaders headers) {
        String token = RequestUtils.getTokenFromRequest(headers);
        String username = this.jwtService.extractUsername(token);

        UserEntity user = this.userRepository.findByUsername(username).orElseThrow(
            () -> new EntityNotFoundException("User with email " + username + " not found")
        );

        return new MeDTO(user.getId(), user.getImage().getImageBase64());
    }
}
