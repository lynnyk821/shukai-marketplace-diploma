package ua.shukai.microservice.app.userservice.exception.custom;

import org.springframework.http.HttpStatus;
import ua.shukai.microservice.app.userservice.exception.basic.ApplicationBasicException;

public class JwtTypeException extends ApplicationBasicException {
    public JwtTypeException(String message) {
        super(message, HttpStatus.UNAUTHORIZED);
    }
}
