package ua.shukai.microservice.app.catalogueservice.mapper;

import ua.shukai.microservice.app.catalogueservice.controller.region.dto.RegionDTO;
import ua.shukai.microservice.app.catalogueservice.parser.model.CitiesDataJSON;

import java.util.List;

public interface RegionMapper {
    List<RegionDTO> map(CitiesDataJSON citiesData);
}
