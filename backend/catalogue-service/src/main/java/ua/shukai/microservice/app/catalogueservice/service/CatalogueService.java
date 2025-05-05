package ua.shukai.microservice.app.catalogueservice.service;

import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.GetAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdDTO;

public interface CatalogueService {
    GetAdDTO findByIdAdvertisementWithStatusApproved(String uuid);

    void saveAdWithPendingStatusAndPublishItForReview(CreateAdDTO dto);

    void updateStatusAndPublish(String uuid);

    void updateAdvertisementAndPublishToReview(String uuid, UpdateAdDTO advertisement);

    void deleteById(String uuid);
}
