package ua.shukai.microservice.app.userservice.exception.custom;

import org.springframework.http.HttpStatus;
import ua.shukai.microservice.app.userservice.exception.basic.ApplicationBasicException;

public class EntityAlreadyExistException extends ApplicationBasicException {
    public EntityAlreadyExistException(String message) {
        super(message, HttpStatus.CONFLICT);
    }
}
