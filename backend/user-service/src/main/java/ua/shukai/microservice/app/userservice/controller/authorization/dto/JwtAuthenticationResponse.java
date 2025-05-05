package ua.shukai.microservice.app.userservice.controller.authorization.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@Builder
public class JwtAuthenticationResponse {
    @NotNull
    private String accessToken;

    @NotNull
    private String refreshToken;
}
