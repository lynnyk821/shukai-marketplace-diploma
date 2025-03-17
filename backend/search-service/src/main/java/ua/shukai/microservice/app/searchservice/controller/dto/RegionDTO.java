package ua.shukai.microservice.app.searchservice.controller.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter @Setter
public class RegionDTO {
    private String ref;           // Ідентифікатор міста
    private String description;   // Опис міста
    private String cityName;      // Назва міста
    private String regionName;    // Назва регіону
}
