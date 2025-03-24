package ua.shukai.microservice.app.userservice.controller.response;

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
