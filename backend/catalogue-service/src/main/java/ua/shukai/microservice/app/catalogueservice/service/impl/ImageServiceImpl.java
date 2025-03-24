package ua.shukai.microservice.app.catalogueservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ua.shukai.microservice.app.catalogueservice.database.entity.AdvertisementEntity;
import ua.shukai.microservice.app.catalogueservice.database.entity.ImageEntity;
import ua.shukai.microservice.app.catalogueservice.database.repository.ImageRepository;
import ua.shukai.microservice.app.catalogueservice.service.ImageService;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {
    private final ImageRepository imageRepository;

    @Override
    public List<ImageEntity> createImages(List<String> images) {
        List<ImageEntity> imageEntities = images.stream()
                .filter(i -> i != null && !i.isEmpty())
                .map(i -> ImageEntity.builder().base64Image(i).build())
                .collect(Collectors.toList());

        return this.imageRepository.saveAll(imageEntities);
    }
}