package ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.List;

@Builder
@Getter @Setter
public class GetAdvertisementDTO {

    @NotNull
    private String createdAt;

    @NotBlank(message = "Назва не може бути пуста")
    @Size(max = 255, message = "Поле 'name' не повинно перевищувати 255 символів")
    private String name;

    @Min(value = 0, message = "Мінімальне значення 'price' може бути 0")
    private Integer price;

    @Size(max = 3000)
    private String description;

    @Min(value = 0, message = "Мінімальне значення 'favoritesCount' може бути 0")
    private Integer favoritesCount;

    @NotNull
    @Size(min = 1, message = "Поле images повинно містити принаймні один елемент")
    private List<String> images;

    @NotNull
    private Region region;

    @NotNull
    private User user;

    @NotNull
    private Category category;

    @NotNull
    private List<String> deliveryMethods;

    @NotNull
    private List<String> paymentMethods;

    @Getter @Setter
    @AllArgsConstructor
    public static class Region {
        private String cityName;
        private String regionName;
    }

    @Getter @Setter
    @AllArgsConstructor
    public static class Category {
        private String name;
        private String path;
    }

    @Getter @Setter
    @AllArgsConstructor
    public static class User {
        private String name;
        private String image;
        private String phoneNumber;
    }
}
