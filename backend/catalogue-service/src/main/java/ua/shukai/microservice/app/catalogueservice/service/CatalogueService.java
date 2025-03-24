package ua.shukai.microservice.app.catalogueservice.service;

import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.GetAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdDTO;

public interface CatalogueService {
    GetAdDTO findById(Long id);

    void create(CreateAdDTO dto);

    void update(Long id, UpdateAdDTO advertisement);

    void deleteById(Long id);
}
