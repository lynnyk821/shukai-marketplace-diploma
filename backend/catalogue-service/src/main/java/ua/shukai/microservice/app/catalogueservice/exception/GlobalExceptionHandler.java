package ua.shukai.microservice.app.catalogueservice.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ua.shukai.microservice.app.catalogueservice.exception.basic.ApplicationBasicException;
import ua.shukai.microservice.app.catalogueservice.exception.errors.ErrorResponseDTO;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ApplicationBasicException.class)
    public ResponseEntity<ErrorResponseDTO> handleBasicApplicationException(final ApplicationBasicException ex) {
        return new ResponseEntity<>(new ErrorResponseDTO(ex.getMessage()), ex.getHttpStatus());
    }
}
