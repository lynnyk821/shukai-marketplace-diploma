package ua.shukai.microservice.app.searchservice.mapper.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.searchservice.controller.dto.RegionDTO;
import ua.shukai.microservice.app.searchservice.mapper.NovaposhtaMapper;
import ua.shukai.microservice.app.searchservice.parser.model.CitiesDataJSON;

import java.util.List;

@Component
@RequiredArgsConstructor
public class NovaposhtaMapperImpl implements NovaposhtaMapper {
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
