package ua.shukai.microservice.app.catalogueservice.controller.home.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter @Setter
public class GetHomeAdsDTO {
    private List<AdHome> newAdvertisements;
    private List<AdHome> clothesAdvertisements;
    private List<AdHome> autoGoodAdvertisements;
    private List<AdHome> electronicAdvertisements;

    @Builder
    @Getter @Setter
    public static class AdHome {
        private String name;
        private Integer price;
        private String image;
        private String createdAt;
    } 
}
