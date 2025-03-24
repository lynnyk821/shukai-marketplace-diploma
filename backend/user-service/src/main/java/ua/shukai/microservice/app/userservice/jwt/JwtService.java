package ua.shukai.microservice.app.userservice.jwt;

import ua.shukai.microservice.app.userservice.jwt.model.JwtTokens;
import ua.shukai.microservice.app.userservice.jwt.type.JwtType;

public interface JwtService {
    String refresh(String refreshToken);

    String extractUsername(String token);

    String generateToken(String username, JwtType tokenType);

    JwtTokens generateTokens(String username);
}
