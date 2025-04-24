package ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import ua.shukai.microservice.app.catalogueservice.controller.region.dto.RegionDTO;

import java.sql.Timestamp;
import java.util.List;

@Builder
@Getter @Setter
public class AdvertisementDTO {

    @NotNull
    private Long id;

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
    private RegionDTO region;

    @NotNull
    private User user;

    @NotNull
    private Category category;

    @NotNull
    private List<String> deliveryMethods;

    @NotNull
    private List<String> paymentMethods;

    @Builder @Getter
    @AllArgsConstructor
    public static class Category {
        private String name;
        private String path;
    }

    @Builder @Getter
    @AllArgsConstructor
    public static class User {
        private Long id;
        private String name;
        private String image;
        private String phoneNumber;
        private Timestamp visitingTime;
    }
}
