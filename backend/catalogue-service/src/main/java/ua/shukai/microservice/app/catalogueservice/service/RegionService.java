package ua.shukai.microservice.app.catalogueservice.service;

import ua.shukai.microservice.app.catalogueservice.controller.region.dto.RegionDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.RegionEntity;

import java.util.List;

public interface RegionService {
    List<RegionDTO> findRegions(String region);

    RegionEntity findByRegionOrCreate(RegionDTO region);
}
