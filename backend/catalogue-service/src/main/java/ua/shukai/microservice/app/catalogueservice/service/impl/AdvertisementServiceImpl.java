package ua.shukai.microservice.app.catalogueservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.*;
import ua.shukai.microservice.app.catalogueservice.database.repository.AdvertisementRepository;
import ua.shukai.microservice.app.catalogueservice.database.repository.DeliveryMethodRepository;
import ua.shukai.microservice.app.catalogueservice.database.repository.PaymentMethodRepository;
import ua.shukai.microservice.app.catalogueservice.exception.custom.EntityNotFoundException;
import ua.shukai.microservice.app.catalogueservice.mapper.AdvertisementMapper;
import ua.shukai.microservice.app.catalogueservice.mapper.EntityMapper;
import ua.shukai.microservice.app.catalogueservice.service.*;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdvertisementServiceImpl implements AdvertisementService {
    private final AdvertisementMapper advertisementMapper;

    private final UserService userService;
    private final ImageService imageService;
    private final RegionService regionService;
    private final CategoryService categoryService;

    private final AdvertisementRepository advertisementRepository;
    private final PaymentMethodRepository paymentMethodRepository;
    private final DeliveryMethodRepository deliveryMethodRepository;

    @Override
    public AdvertisementEntity findByIdOrThrow(Long id) {
        return this.advertisementRepository.findById(id).orElseThrow(
            () -> new EntityNotFoundException(String.format("Advertisement with id %s not found", id))
        );
    }

    @Override
    public List<AdvertisementEntity> findMoreById(Long userId) {
        PageRequest pageRequest = PageRequest.of(0, 6, Sort.by(Sort.Direction.DESC, "favoritesCount"));
        return this.advertisementRepository.findAllByUser_Id(userId, pageRequest).toList();
    }

    @Override
    @Transactional
    public AdvertisementEntity create(CreateAdDTO dto) {
        UserEntity user = this.userService.findByIdOrThrow(dto.getUserId());
        RegionEntity region = this.regionService.findByRegionOrCreate(dto.getRegion());
        CategoryEntity category = this.categoryService.findByIdOrThrow(dto.getCategoryId());

        List<ImageEntity> images = this.imageService.createImages(dto.getImages());
        List<DeliveryMethodEntity> deliveries = this.deliveryMethodRepository.findAllById(dto.getDeliveryMethodIds());
        List<PaymentMethodEntity> payments = this.paymentMethodRepository.findAllById(dto.getPaymentMethodIds());

        AdvertisementEntity advertisementEntity = this.advertisementMapper
                .mapToEntity(dto, user, region, category, images, deliveries, payments);

        return this.advertisementRepository.save(advertisementEntity);
    }

    @Override
    @Transactional
    public AdvertisementEntity update(Long id, UpdateAdDTO dto) {
        return this.advertisementRepository.findById(id)
                .map(advertisement -> {
                    RegionEntity region = this.regionService.findByRegionOrCreate(dto.getRegion());
                    CategoryEntity category = this.categoryService.findByIdOrThrow(dto.getCategoryId());

                    List<DeliveryMethodEntity> deliveries = this.deliveryMethodRepository.findAllById(dto.getDeliveryMethodIds());
                    List<PaymentMethodEntity> payments = this.paymentMethodRepository.findAllById(dto.getPaymentMethodIds());

                    return this.advertisementMapper.mapToEntity(advertisement, dto, region, category, deliveries, payments);
                })
                .orElseThrow(() -> new EntityNotFoundException("Advertisement with id " + id + " not found"));
    }

    @Override
    public AdvertisementEntity deleteById(Long id) {
        AdvertisementEntity ad = this.findByIdOrThrow(id);
        this.advertisementRepository.deleteById(ad.getId());
        return ad;
    }

    @Override
    public List<Object> getAdsByUserId(Long userId) {
        return List.of();
    }

    @Override
    public List<Object> getSalesByUserId(Long userId) {
        return List.of();
    }

    @Override
    public List<Object> getPurchaseByUserId(Long userId) {
        return List.of();
    }
}
