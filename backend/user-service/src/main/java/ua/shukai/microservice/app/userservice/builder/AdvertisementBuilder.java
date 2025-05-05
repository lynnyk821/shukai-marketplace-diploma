package ua.shukai.microservice.app.userservice.builder;

import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.userservice.controller.admin.dto.ReviewAdvertisementDTO;
import ua.shukai.microservice.app.userservice.database.entity.AdvertisementEntity;
import ua.shukai.microservice.app.userservice.database.entity.AdvertisementImageEntity;

@Component
public class AdvertisementBuilder {

    public ReviewAdvertisementDTO buildAdvertisementDTO(AdvertisementEntity advertisement) {
        return ReviewAdvertisementDTO.builder()
                .uuid(advertisement.getUuid())
                .title(advertisement.getTitle())
                .description(advertisement.getDescription())
                .status(advertisement.getStatus().name())
                .userEmail(advertisement.getUser().getEmail())
                .images(advertisement.getImages().stream().map(AdvertisementImageEntity::getImageUrl).toList())
        .build();
    }
}
