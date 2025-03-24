package ua.shukai.microservice.app.catalogueservice.controller.region.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter @Setter
public class RegionDTO {
    private String ref;
    private String description;
    private String cityName;
    private String regionName;
}
