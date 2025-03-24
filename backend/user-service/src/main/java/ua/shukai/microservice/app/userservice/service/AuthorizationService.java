package ua.shukai.microservice.app.userservice.service;

import ua.shukai.microservice.app.userservice.controller.request.RecoveryRequest;
import ua.shukai.microservice.app.userservice.controller.request.SignInRequest;
import ua.shukai.microservice.app.userservice.controller.request.SignUpRequest;
import ua.shukai.microservice.app.userservice.controller.response.JwtAuthenticationResponse;

public interface AuthorizationService {

    JwtAuthenticationResponse signIn(SignInRequest request);

    JwtAuthenticationResponse signUp(SignUpRequest request);

    JwtAuthenticationResponse recovery(RecoveryRequest request);

    JwtAuthenticationResponse refresh(String refreshToken);
}
