package ua.shukai.microservice.app.catalogueservice.jwt.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JwtService {
    @Value("${jwt.secret.signature}")
    private String signature;

    public String extractUsername(String token) {
        return parse(token).getSubject();
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

    public void validateToken(String token) {
        Claims claims = parse(token);
        if (claims.getExpiration().before(getDateCurrentTime())) {
            throw new JwtException("Refresh token expired");
        }
    }

    private Date getDateCurrentTime() {
        return new Date(System.currentTimeMillis());
    }
}
