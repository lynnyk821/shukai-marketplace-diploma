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
import ua.shukai.microservice.app.catalogueservice.kafka.producer.KafkaProducer;
import ua.shukai.microservice.app.catalogueservice.service.CatalogueService;
import ua.shukai.microservice.app.catalogueservice.kafka.producer.dto.KafkaAdvertisementDTO;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CatalogueServiceImpl implements CatalogueService {
    private final KafkaProducer kafkaProducer;

    private final ImageMapperImpl imageMapper;
    private final AdvertisementMapperImpl advertisementMapper;

    private final UserRepository userRepository;
    private final ImageRepository imageRepository;
    private final RegionRepository regionRepository;
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
        return this.advertisementMapper.mapToGetAdvertisementDTO(advertisementEntity);
    }

    @Override
    @Transactional
    public void create(CreateAdvertisementDTO dto) {
        CategoryEntity category = this.categoryRepository.findByName(dto.getCategoryName()).orElseThrow(
            () -> new EntityNotFoundException(String.format("Category with name %s not found", dto.getCategoryName()))
        );
        System.out.println("0");
        UserEntity user = this.userRepository.findById(dto.getUserId()).orElseThrow(
            () -> new EntityNotFoundException(String.format("User with id %s not found", dto.getUserId()))
        );
        System.out.println("1");
        RegionEntity region = this.regionRepository.findByDescription(dto.getRegion().getDescription())
            .orElseGet(() -> this.regionRepository.save(RegionEntity.builder()
                    .cityName(dto.getRegion().getCityName())
                    .regionName(dto.getRegion().getRegionName())
                    .description(dto.getRegion().getDescription())
                .build()
            )
        );
        System.out.println("2");

        System.out.println("Saved Region with Description: " + region.getDescription());

        List<DeliveryMethodEntity> deliveries = this.deliveryMethodRepository.findAllById(dto.getDeliveryMethodIds());
        List<PaymentMethodEntity> payments = this.paymentMethodRepository.findAllById(dto.getPaymentMethodIds());

        List<ImageEntity> images = this.imageMapper.toListImage(dto.getImages());
        images = this.imageRepository.saveAll(images);

        AdvertisementEntity ad = this.advertisementMapper.mapToCreateAdvertisementDTO(dto, images, category, user, region, payments, deliveries);
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
        AdvertisementEntity ad = this.advertisementMapper.mapToUpdateAdvertisementDTO(dto);
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
