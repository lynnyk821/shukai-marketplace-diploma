package ua.shukai.microservice.app.catalogueservice.mapper;

import ua.shukai.microservice.app.catalogueservice.database.entity.AdImageEntity;
import ua.shukai.microservice.app.catalogueservice.database.entity.ImageEntity;

import java.util.List;


public interface ImageMapper {
    AdImageEntity toListAdImage(ImageEntity image);

    List<AdImageEntity> toListAdImage(List<ImageEntity> images);

    List<ImageEntity> toListImage(List<String> images);

    List<String> toStringList(List<AdImageEntity> images);
}
