package ua.shukai.microservice.app.catalogueservice.mapper.impl;

import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.catalogueservice.controller.category.dto.CategoryDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.CategoryEntity;
import ua.shukai.microservice.app.catalogueservice.mapper.CategoryMapper;

@Component
public class CategoryMapperImpl implements CategoryMapper {

    @Override
    public CategoryDTO toDTO(CategoryEntity entity) {
        return CategoryDTO.builder()
                .id(entity.getId())
                .name(entity.getName())
        .build();
    }
}
