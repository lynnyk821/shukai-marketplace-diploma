package ua.shukai.microservice.app.userservice.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.Headers;
import org.springframework.web.bind.annotation.*;
import ua.shukai.microservice.app.userservice.controller.request.RecoveryRequest;
import ua.shukai.microservice.app.userservice.controller.request.SignInRequest;
import ua.shukai.microservice.app.userservice.controller.request.SignUpRequest;
import ua.shukai.microservice.app.userservice.controller.response.JwtAuthenticationResponse;
import ua.shukai.microservice.app.userservice.service.AuthorizationService;
import ua.shukai.microservice.app.userservice.utils.RequestUtils;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthorizationController {
    private final AuthorizationService authorizationService;

    @PostMapping("/sign-in")
    public ResponseEntity<JwtAuthenticationResponse> signIn(@RequestBody SignInRequest request) {
        JwtAuthenticationResponse response = this.authorizationService.signIn(request);
        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/sign-up")
    public ResponseEntity<JwtAuthenticationResponse> signUp(@RequestBody SignUpRequest request) {
        JwtAuthenticationResponse response = this.authorizationService.signUp(request);
        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/recovery")
    public ResponseEntity<JwtAuthenticationResponse> recovery(@RequestBody RecoveryRequest request) {
        JwtAuthenticationResponse response = this.authorizationService.recovery(request);
        return ResponseEntity.ok().body(response);
    }

    @PostMapping("/refresh")
    public ResponseEntity<JwtAuthenticationResponse> refresh(@RequestHeader HttpHeaders headers) {
        String refreshToken = RequestUtils.getTokenFromRequest(headers);
        JwtAuthenticationResponse response = this.authorizationService.refresh(refreshToken);
        return ResponseEntity.ok().body(response);
    }
}

