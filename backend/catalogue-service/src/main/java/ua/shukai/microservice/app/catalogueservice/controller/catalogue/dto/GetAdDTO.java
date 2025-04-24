package ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto;

import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Builder
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class GetAdDTO {

    @NotNull
    private AdvertisementDTO advertisement;

    @NotNull
    private List<MoreAd> moreAdvertisements;

    @Builder @Getter
    public static class MoreAd {
        private Long id;
        private String name;
        private String image;
        private Integer price;
    }
}
