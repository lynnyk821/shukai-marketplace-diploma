package ua.shukai.microservice.app.userservice.jwt.model;

import ua.shukai.microservice.app.userservice.jwt.type.JwtType;

public record Jwt(JwtType type, String token) { }
