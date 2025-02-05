package ua.shukai.microservice.app.catalogueservice.mapper.impl;

import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.catalogueservice.database.entity.AdImageEntity;
import ua.shukai.microservice.app.catalogueservice.database.entity.ImageEntity;
import ua.shukai.microservice.app.catalogueservice.mapper.ImageMapper;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ImageMapperImpl implements ImageMapper {

    @Override
    public AdImageEntity toListAdImage(ImageEntity imageEntity) {
        return AdImageEntity.builder().image(imageEntity).build();
    }

    @Override
    public List<AdImageEntity> toListAdImage(List<ImageEntity> m) {
        return m.stream().map(this::toListAdImage).toList();
    }

    @Override
    public List<ImageEntity> toListImage(List<String> images) {
        return images.stream().map(image -> ImageEntity.builder().base64Image(image).build()).toList();
    }

    @Override
    public List<String> toStringList(List<AdImageEntity> images) {
        return images.stream().map(image -> image.getImage().getBase64Image()).toList();
    }
}
