package ua.shukai.microservice.app.catalogueservice.exception.basic;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public class ApplicationBasicException extends RuntimeException {
    private final HttpStatus httpStatus;

    public ApplicationBasicException(String message, HttpStatus httpStatus) {
        super(message);
        this.httpStatus = httpStatus;
    }
}
