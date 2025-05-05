package ua.shukai.microservice.app.userservice.controller.authorization.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SignInRequest {

    @Size(min = 5, max = 255, message = "Адреса електронної пошти повинна містити від 5 до 255 символів")
    @NotBlank(message = "Адреса електронної пошти не може бути пустою")
    @Email(message = "Email адрес має бути в форматі user@example.com")
    private String email;

    @Size(max = 255, message = "Довжина паролю повинна бути не більше 255 символів")
    @NotBlank(message = "Пароль не може буть пустим")
    private String password;
}
