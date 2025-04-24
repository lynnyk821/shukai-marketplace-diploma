package ua.shukai.microservice.app.userservice.jwt.impl;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.userservice.exception.custom.JwtExpiredException;
import ua.shukai.microservice.app.userservice.exception.custom.JwtTypeException;
import ua.shukai.microservice.app.userservice.jwt.JwtService;
import ua.shukai.microservice.app.userservice.jwt.model.JwtTokens;
import ua.shukai.microservice.app.userservice.jwt.type.JwtType;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.Date;

@Component
@Slf4j
public class JwtServiceImpl implements JwtService {

    @Value("${jwt.secret.signature}")
    private String signature;

    @Value("${jwt.secret.access-lifetime}")
    private Duration accessLifetime;

    @Value("${jwt.secret.refresh-lifetime}")
    private Duration refreshLifetime;

    @Override
    public String generateToken(String username, JwtType tokenType) {
        return Jwts.builder()
                .subject(username)
                .issuedAt(getDateCurrentTime())
                .expiration(getExpiration(tokenType))
                .claims().add("type", tokenType).and()
                .signWith(getSecretKey(), Jwts.SIG.HS256)
        .compact();
    }

    @Override
    public JwtTokens generateTokens(String username) {
        return new JwtTokens(
            generateToken(username, JwtType.ACCESS),
            generateToken(username, JwtType.REFRESH)
        );
    }

    @Override
    public String refresh(String refreshToken) {
        Claims claims = parse(refreshToken);

        validateRefreshToken(claims);

        return generateToken(claims.getSubject(), JwtType.ACCESS);
    }

    @Override
    public String extractUsername(String token) {
        return parse(token).getSubject();
    }

    private void validateRefreshToken(Claims claims) {
        if (claims.getExpiration().before(getDateCurrentTime())) {
            throw new JwtExpiredException("Refresh token expired");
        } else if (!claims.get("type", String.class).equals(JwtType.REFRESH.toString())) {
            throw new JwtTypeException("Invalid refresh token");
        }
    }

    private SecretKey getSecretKey() {
        return Keys.hmacShaKeyFor(signature.getBytes(StandardCharsets.UTF_8));
    }

    private Claims parse(String token) {
        return Jwts.parser()
                .verifyWith(getSecretKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private Date getDateCurrentTime() {
        return new Date(System.currentTimeMillis());
    }

    private Date getExpiration(JwtType tokenType) {
        return new Date(System.currentTimeMillis() + switch (tokenType) {
            case ACCESS -> accessLifetime.toMillis();
            case REFRESH -> refreshLifetime.toMillis();
        });
    }
}
