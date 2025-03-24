package ua.shukai.microservice.app.catalogueservice.service;

import ua.shukai.microservice.app.catalogueservice.database.entity.ImageEntity;

import java.util.List;

public interface ImageService {
    List<ImageEntity> createImages(List<String> images);
}
