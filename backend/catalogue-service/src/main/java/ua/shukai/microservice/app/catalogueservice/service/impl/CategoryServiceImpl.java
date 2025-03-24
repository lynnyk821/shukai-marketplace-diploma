package ua.shukai.microservice.app.catalogueservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ua.shukai.microservice.app.catalogueservice.controller.category.dto.CategoryDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.CategoryEntity;
import ua.shukai.microservice.app.catalogueservice.database.repository.CategoryRepository;
import ua.shukai.microservice.app.catalogueservice.exception.custom.EntityNotFoundException;
import ua.shukai.microservice.app.catalogueservice.mapper.CategoryMapper;
import ua.shukai.microservice.app.catalogueservice.service.CategoryService;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private final CategoryMapper categoryMapper;
    private final CategoryRepository categoryRepository;

    @Override
    public List<CategoryDTO> getCategories() {
        List<CategoryEntity> categoryEntities = this.categoryRepository.findAllByParentId(null);

        return categoryEntities.stream()
                .map(this.categoryMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CategoryEntity findByIdOrThrow(Long categoryId) {
        return this.categoryRepository.findById(categoryId).orElseThrow(
            () -> new EntityNotFoundException("Category not found with ID: " + categoryId)
        );
    }
}
