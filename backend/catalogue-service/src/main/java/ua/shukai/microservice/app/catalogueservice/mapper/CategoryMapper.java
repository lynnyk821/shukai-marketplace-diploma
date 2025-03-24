package ua.shukai.microservice.app.catalogueservice.mapper;

import ua.shukai.microservice.app.catalogueservice.controller.category.dto.CategoryDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.CategoryEntity;

public interface CategoryMapper {
    CategoryDTO toDTO(CategoryEntity categoryEntity);
}
