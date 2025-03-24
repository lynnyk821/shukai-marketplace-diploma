package ua.shukai.microservice.app.userservice.controller.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class RecoveryRequest {

    @Size(min = 5, max = 255, message = "Адреса електронної пошти повинна містити від 5 до 255 символів")
    @NotBlank(message = "Адреса електронної пошти не може бути пустою")
    @Email(message = "Email адрес має бути в форматі user@example.com")
    private String email;
}
