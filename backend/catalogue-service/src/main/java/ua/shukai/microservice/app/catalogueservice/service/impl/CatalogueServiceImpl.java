package ua.shukai.microservice.app.catalogueservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.GetAdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.*;
import ua.shukai.microservice.app.catalogueservice.database.repository.*;
import ua.shukai.microservice.app.catalogueservice.exception.custom.EntityNotFoundException;
import ua.shukai.microservice.app.catalogueservice.mapper.impl.AdvertisementMapperImpl;
import ua.shukai.microservice.app.catalogueservice.mapper.impl.ImageMapperImpl;
import ua.shukai.microservice.app.catalogueservice.producer.KafkaProducer;
import ua.shukai.microservice.app.catalogueservice.service.CatalogueService;
import ua.shukai.microservice.app.catalogueservice.producer.dto.KafkaAdvertisementDTO;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CatalogueServiceImpl implements CatalogueService {
    private final KafkaProducer kafkaProducer;

    private final ImageMapperImpl imageMapper;
    private final AdvertisementMapperImpl advertisementMapper;

    private final ImageRepository imageRepository;
    private final CategoryRepository categoryRepository;
    private final AdvertisementRepository advertisementRepository;
    private final PaymentMethodRepository paymentMethodRepository;
    private final DeliveryMethodRepository deliveryMethodRepository;


    @Override
    @Transactional(readOnly = true)
    public GetAdvertisementDTO findById(Long id) {
        AdvertisementEntity advertisementEntity = this.advertisementRepository.findById(id).orElseThrow(
            () -> new EntityNotFoundException(String.format("Advertisement with id %s not found", id))
        );
        return this.advertisementMapper.map(advertisementEntity);
    }

    @Override
    @Transactional
    public void create(CreateAdvertisementDTO dto) {
        CategoryEntity category = this.categoryRepository.findById(dto.getCategoryId()).orElseThrow(
            () -> new EntityNotFoundException(String.format("Category with id %s not found", dto.getCategoryId()))
        );

        List<DeliveryMethodEntity> deliveryMethods = this.deliveryMethodRepository.findAllById(dto.getDeliveryMethodIds());
        List<PaymentMethodEntity> paymentMethods = this.paymentMethodRepository.findAllById(dto.getPaymentMethodIds());
        List<ImageEntity> images = this.imageMapper.toListImage(dto.getImages());

        images = this.imageRepository.saveAll(images);

        AdvertisementEntity ad = this.advertisementMapper.map(dto, category, images, deliveryMethods, paymentMethods);

        ad = this.advertisementRepository.save(ad);

        this.kafkaProducer.send("created_advertisement", KafkaAdvertisementDTO.builder()
                .id(ad.getId())
                .name(ad.getName())
                .price(ad.getPrice())
                .createAt(ad.getCreatedAt().getTime())
                .image(ad.getImages().getFirst().getImage().getBase64Image())
                .categoryName(category.getName())
        .build());
    }

    @Override
    @Transactional
    public void update(UpdateAdvertisementDTO dto) {
        this.advertisementRepository.findById(dto.getId()).orElseThrow(
            () -> new EntityNotFoundException(String.format("Advertisement with id %s not found", dto.getId()))
        );

        AdvertisementEntity ad = this.advertisementMapper.map(dto);
        this.advertisementRepository.save(ad);
    }

    @Override
    @Transactional
    public void deleteById(Long id) {
        AdvertisementEntity advertisementEntity = this.advertisementRepository.findById(id).orElseThrow(
            () -> new EntityNotFoundException(String.format("Advertisement with id %s not found", id))
        );
        this.advertisementRepository.delete(advertisementEntity);
    }
}
