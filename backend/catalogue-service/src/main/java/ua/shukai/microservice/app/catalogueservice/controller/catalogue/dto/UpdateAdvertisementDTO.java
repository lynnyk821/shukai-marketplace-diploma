package ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
public class UpdateAdvertisementDTO {

    @Min(value = 0, message = "Мінімальне id значення може бути 0!")
    private Long id;

    @NotBlank(message = "Назва не може бути пуста")
    @Size(max = 255, message = "Назва не повинна перевищувати 255 символів!")
    private String name;

    @Size(max = 3000, message = "Максимальна description довжина не може бути більша за 3000 символів!")
    private String description;

    @Min(value = 0, message = "Мінімальне price значення може бути 0!")
    private Integer price;

    @Min(value = 0, message = "Мінімальне favoritesCount значення може бути 0!")
    private Integer favoritesCount;

    @NotNull
    private List<String> images;

    @Min(value = 1, message = "Мінімальне userId значення може бути 1!")
    private Long userId;

    @Min(value = 1, message = "Мінімальне categoryId значення може бути 1!")
    private Long categoryId;

    @Min(value = 1, message = "Мінімальне deliveryMethodId значення може бути 1!")
    private Long deliveryMethodId;

    @Min(value = 1, message = "Мінімальне paymentMethodId значення може бути 1!")
    private Long paymentMethodId;
}

