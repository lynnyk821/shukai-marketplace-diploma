package ua.shukai.microservice.app.userservice.service;

import ua.shukai.microservice.app.userservice.controller.authorization.dto.RecoveryRequest;
import ua.shukai.microservice.app.userservice.controller.authorization.dto.SignInRequest;
import ua.shukai.microservice.app.userservice.controller.authorization.dto.SignUpRequest;
import ua.shukai.microservice.app.userservice.controller.authorization.dto.JwtAuthenticationResponse;

public interface AuthorizationService {

    JwtAuthenticationResponse signIn(SignInRequest request);

    JwtAuthenticationResponse signUp(SignUpRequest request);

    JwtAuthenticationResponse recovery(RecoveryRequest request);

    JwtAuthenticationResponse refresh(String refreshToken);
}
