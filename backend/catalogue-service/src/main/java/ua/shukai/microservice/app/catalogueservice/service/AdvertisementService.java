package ua.shukai.microservice.app.catalogueservice.service;

import org.springframework.data.domain.Pageable;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.MyAdsResponse;
import ua.shukai.microservice.app.catalogueservice.database.entity.*;
import ua.shukai.microservice.app.catalogueservice.types.AdvertisementStatus;

import java.util.List;

public interface AdvertisementService {
    AdvertisementEntity findByIdOrThrow(String uuid);

    List<AdvertisementEntity> findMoreById(Long userId);

    AdvertisementEntity saveBeforeApprovalWithPendingStatus(CreateAdDTO dto);

    AdvertisementEntity updateAdvertisementAndChangeStatusToPending(String uuid, UpdateAdDTO dto);

    AdvertisementEntity deleteById(String uuid);

    AdvertisementEntity updateStatus(String uuid, AdvertisementStatus status);

    MyAdsResponse getAdsByUserIdAndStatus(Long userId, AdvertisementStatus status, Pageable pageable);

    List<Object> getSalesByUserId(Long userId);

    List<Object> getPurchaseByUserId(Long userId);
}
