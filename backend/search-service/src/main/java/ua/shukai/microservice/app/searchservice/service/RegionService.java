package ua.shukai.microservice.app.searchservice.service;

import ua.shukai.microservice.app.searchservice.controller.dto.RegionDTO;

import java.util.List;

public interface RegionService {
    List<RegionDTO> findRegions(String region);
}
