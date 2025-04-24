package ua.shukai.microservice.app.orderservice.exception.custom;

import org.springframework.http.HttpStatus;
import ua.shukai.microservice.app.orderservice.exception.basic.ApplicationBasicException;

public class EntityAlreadyExistException extends ApplicationBasicException {
    public EntityAlreadyExistException(String message) {
        super(message, HttpStatus.CONFLICT);
    }
}
