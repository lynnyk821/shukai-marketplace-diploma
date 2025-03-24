package ua.shukai.microservice.app.userservice.exception.custom;

import org.springframework.http.HttpStatus;
import ua.shukai.microservice.app.userservice.exception.basic.ApplicationBasicException;

public class JwtExpiredException extends ApplicationBasicException {
    public JwtExpiredException(String message) {
        super(message, HttpStatus.UNAUTHORIZED);
    }
}
