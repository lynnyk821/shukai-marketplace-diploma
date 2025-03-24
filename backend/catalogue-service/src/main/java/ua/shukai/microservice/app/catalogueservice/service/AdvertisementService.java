package ua.shukai.microservice.app.catalogueservice.service;

import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.*;

import java.util.List;

public interface AdvertisementService {
    AdvertisementEntity findByIdOrThrow(Long id);

    List<AdvertisementEntity> findMoreById(Long userId);

    AdvertisementEntity create(CreateAdDTO dto);

    AdvertisementEntity update(Long id, UpdateAdDTO dto);

    AdvertisementEntity deleteById(Long id);

    List<Object> getAdsByUserId(Long userId);

    List<Object> getSalesByUserId(Long userId);

    List<Object> getPurchaseByUserId(Long userId);
}
