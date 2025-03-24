package ua.shukai.microservice.app.userservice.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import ua.shukai.microservice.app.userservice.exception.basic.ApplicationBasicException;
import ua.shukai.microservice.app.userservice.exception.errors.ErrorResponseDTO;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ApplicationBasicException.class)
    public ResponseEntity<ErrorResponseDTO> handleBasicApplicationException(final ApplicationBasicException ex) {
        log.error("Помилка: {} із статусом {}", ex.getMessage(), ex.getHttpStatus());
        return new ResponseEntity<>(new ErrorResponseDTO(ex.getMessage()), ex.getHttpStatus());
    }
}
