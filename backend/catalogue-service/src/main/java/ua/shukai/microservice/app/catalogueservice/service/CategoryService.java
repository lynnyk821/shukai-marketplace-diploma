package ua.shukai.microservice.app.catalogueservice.service;

import ua.shukai.microservice.app.catalogueservice.controller.category.dto.CategoryDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.CategoryEntity;

import java.util.List;

public interface CategoryService {

    List<CategoryDTO> getCategories();

    CategoryEntity findByIdOrThrow(Long categoryId);
}
