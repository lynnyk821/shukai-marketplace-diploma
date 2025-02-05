package ua.shukai.microservice.app.searchservice.controller.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter @Setter
public class SearchAdvertisementDTO {
    private Long id;
    private String name;
    private Integer price;
    private String createdAt;
    private String image;
    private String categoryName;
}
