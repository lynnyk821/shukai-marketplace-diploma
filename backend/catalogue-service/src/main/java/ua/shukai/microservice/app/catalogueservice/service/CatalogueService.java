package ua.shukai.microservice.app.catalogueservice.service;

import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.GetAdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdvertisementDTO;

public interface CatalogueService {

    GetAdvertisementDTO findById(Long id);

    void create(CreateAdvertisementDTO dto);

    void update(UpdateAdvertisementDTO advertisement);

    void deleteById(Long id);
}
