package ua.shukai.microservice.app.catalogueservice.mapper.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.catalogueservice.controller.region.dto.RegionDTO;
import ua.shukai.microservice.app.catalogueservice.mapper.RegionMapper;
import ua.shukai.microservice.app.catalogueservice.parser.model.CitiesDataJSON;

import java.util.List;

@Component
@RequiredArgsConstructor
public class RegionMapperImpl implements RegionMapper {

    @Override
    public List<RegionDTO> map(CitiesDataJSON citiesData) {
        return citiesData.getData().getFirst().getAddresses().stream()
                .map(address -> RegionDTO.builder()
                        .ref(address.getRef())
                        .description(address.getPresent())
                        .cityName(address.getCityName())
                        .regionName(address.getArea())
                        .build())
                .toList();
    }
}
