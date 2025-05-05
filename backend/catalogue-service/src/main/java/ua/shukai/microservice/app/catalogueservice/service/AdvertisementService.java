package ua.shukai.microservice.app.catalogueservice.service;

import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.*;

import java.util.List;

public interface AdvertisementService {
    AdvertisementEntity findByIdOrThrow(String uuid);

    List<AdvertisementEntity> findMoreById(Long userId);

    AdvertisementEntity saveBeforeApprovalWithPendingStatus(CreateAdDTO dto);

    AdvertisementEntity updateAdvertisementAndChangeStatusToPending(String uuid, UpdateAdDTO dto);

    AdvertisementEntity deleteById(String uuid);

    AdvertisementEntity updateStatusAndPublish(String uuid);

    List<Object> getAdsByUserId(Long userId);

    List<Object> getSalesByUserId(Long userId);

    List<Object> getPurchaseByUserId(Long userId);
}
