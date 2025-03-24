package ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter @Setter
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
