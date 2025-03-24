package ua.shukai.microservice.app.userservice.builder;

import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.userservice.controller.response.JwtAuthenticationResponse;
import ua.shukai.microservice.app.userservice.jwt.model.JwtTokens;

@Component
public class ResponseBuilder {

    public JwtAuthenticationResponse buildAuthResponse(JwtTokens jwtTokens) {
        return JwtAuthenticationResponse.builder()
                .accessToken(jwtTokens.accessToken())
                .refreshToken(jwtTokens.refreshToken())
        .build();
    }
}
