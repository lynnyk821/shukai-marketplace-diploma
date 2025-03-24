package ua.shukai.microservice.app.catalogueservice.controller.category.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter @Setter
public class CategoryDTO {
    private Long id;
    private String name;
}
