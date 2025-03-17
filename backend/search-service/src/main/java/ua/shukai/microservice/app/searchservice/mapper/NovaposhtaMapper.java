package ua.shukai.microservice.app.searchservice.mapper;

import ua.shukai.microservice.app.searchservice.controller.dto.RegionDTO;
import ua.shukai.microservice.app.searchservice.parser.model.CitiesDataJSON;

import java.util.List;

public interface NovaposhtaMapper {
    List<RegionDTO> map(CitiesDataJSON citiesData);
}
