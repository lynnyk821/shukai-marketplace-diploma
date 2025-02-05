package ua.shukai.microservice.app.catalogueservice.exception.custom;

import org.springframework.http.HttpStatus;
import ua.shukai.microservice.app.catalogueservice.exception.basic.ApplicationBasicException;

public class EntityAlreadyExistException extends ApplicationBasicException {
    public EntityAlreadyExistException(String message) {
        super(message, HttpStatus.CONFLICT);
    }
}
