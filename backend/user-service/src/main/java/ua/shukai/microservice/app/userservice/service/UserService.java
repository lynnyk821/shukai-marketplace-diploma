package ua.shukai.microservice.app.userservice.service;

import org.springframework.http.HttpHeaders;
import ua.shukai.microservice.app.userservice.controller.request.SignUpRequest;
import ua.shukai.microservice.app.userservice.controller.response.MeDTO;
import ua.shukai.microservice.app.userservice.database.entity.UserEntity;

public interface UserService {

    UserEntity findByEmailOrThrow(String email);

    boolean existsByEmail(String email);

    UserEntity create(SignUpRequest request);

    MeDTO getMeDTO(HttpHeaders headers);
}
