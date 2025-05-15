package ua.shukai.microservice.app.userservice.service.impl;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import ua.shukai.microservice.app.userservice.builder.ResponseBuilder;
import ua.shukai.microservice.app.userservice.controller.authorization.dto.RecoveryRequest;
import ua.shukai.microservice.app.userservice.controller.authorization.dto.SignInRequest;
import ua.shukai.microservice.app.userservice.controller.authorization.dto.SignUpRequest;
import ua.shukai.microservice.app.userservice.controller.authorization.dto.JwtAuthenticationResponse;
import ua.shukai.microservice.app.userservice.database.entity.UserEntity;
import ua.shukai.microservice.app.userservice.exception.custom.EntityAlreadyExistException;
import ua.shukai.microservice.app.userservice.jwt.JwtService;
import ua.shukai.microservice.app.userservice.jwt.model.JwtTokens;
import ua.shukai.microservice.app.userservice.kafka.KafkaService;
import ua.shukai.microservice.app.userservice.service.AuthorizationService;
import ua.shukai.microservice.app.userservice.service.UserService;

@Service
@RequiredArgsConstructor
public class AuthorizationServiceImpl implements AuthorizationService {
    private final JwtService jwtService;
    private final UserService userService;
    private final KafkaService kafkaService;
    private final ResponseBuilder responseBuilder;
    private final AuthenticationManager authenticationManager;

    @Override
    public JwtAuthenticationResponse signIn(@NonNull SignInRequest request) {
        UserEntity user = this.userService.findByEmailOrThrow(request.getEmail());
        authenticate(user.getUsername(), request.getPassword());

        JwtTokens tokens = this.jwtService.generateTokens(user.getUsername());
        return this.responseBuilder.buildAuthResponse(tokens);
    }

    @Override
    public JwtAuthenticationResponse signUp(@NonNull SignUpRequest request) {
        if(this.userService.existsByEmail(request.getEmail())){
            throw new EntityAlreadyExistException("User with email: " + request.getEmail() + " already exist");
        }

        UserEntity user = this.userService.create(request);

        this.kafkaService.sendSignUpEventForOrderService(user);
        this.kafkaService.sendSignUpEventForCatalogueService(user);

        JwtTokens tokens = this.jwtService.generateTokens(user.getUsername());
        return this.responseBuilder.buildAuthResponse(tokens);
    }

    @Override
    public JwtAuthenticationResponse recovery(@NonNull RecoveryRequest recoveryRequest) {
        return null;
    }

    @Override
    public JwtAuthenticationResponse refresh(String refreshToken) {
        String accessToken = this.jwtService.refresh(refreshToken);
        JwtTokens tokens = new JwtTokens(accessToken, refreshToken);
        return this.responseBuilder.buildAuthResponse(tokens);
    }

    private void authenticate(String username, String password) {
        this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
    }
}
