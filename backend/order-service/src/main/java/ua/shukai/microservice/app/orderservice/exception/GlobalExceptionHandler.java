package ua.shukai.microservice.app.orderservice.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ua.shukai.microservice.app.orderservice.exception.basic.ApplicationBasicException;
import ua.shukai.microservice.app.orderservice.exception.errors.ErrorResponseDTO;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ApplicationBasicException.class)
    public ResponseEntity<ErrorResponseDTO> handleBasicApplicationException(final ApplicationBasicException ex) {
        return new ResponseEntity<>(new ErrorResponseDTO(ex.getMessage()), ex.getHttpStatus());
    }
}
