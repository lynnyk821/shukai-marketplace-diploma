package ua.shukai.microservice.app.userservice.controller.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SignUpRequest {

    @Size(min = 5, max = 50, message = "Ім'я користувача повинне вміщувати від 5 до 50 символів")
    @NotBlank(message = "Ім'я користувача не може бути пустим")
    private String username;

    @Size(max = 255, message = "Довжина паролю повинна бути не більше 255 символів")
    private String password;

    @Size(min = 5, max = 255, message = "Адреса електронної пошти повинна містити від 5 до 255 символів")
    @NotBlank(message = "Адреса електронної пошти не може бути пустою")
    @Email(message = "Email адрес має бути в форматі user@example.com")
    private String email;

    @Size(min = 10, max = 15, message = "Номер телефону повинен містити від 10 до 15 символів")
    @Pattern(regexp = "^\\+?[0-9]{10,15}$", message = "Номер телефону має бути в форматі +XXXXXXXXXXX")
    private String phoneNumber;
}
