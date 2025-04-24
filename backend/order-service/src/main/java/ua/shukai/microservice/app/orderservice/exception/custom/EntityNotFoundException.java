package ua.shukai.microservice.app.orderservice.exception.custom;

import org.springframework.http.HttpStatus;
import ua.shukai.microservice.app.orderservice.exception.basic.ApplicationBasicException;

public class EntityNotFoundException extends ApplicationBasicException {
    public EntityNotFoundException(String message) {
        super(message, HttpStatus.NOT_FOUND);
    }
}
