package ua.shukai.microservice.app.catalogueservice.exception.errors;

public record ErrorResponseDTO(String message, long timestamp) {

    public ErrorResponseDTO(String message) {
        this(message, System.currentTimeMillis());
    }
}
