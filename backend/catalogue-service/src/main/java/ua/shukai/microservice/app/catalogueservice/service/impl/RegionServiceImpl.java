package ua.shukai.microservice.app.catalogueservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client
        .WebClient;
import ua.shukai.microservice.app.catalogueservice.controller.region.dto.RegionDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.RegionEntity;
import ua.shukai.microservice.app.catalogueservice.database.repository.RegionRepository;
import ua.shukai.microservice.app.catalogueservice.mapper.RegionMapper;
import ua.shukai.microservice.app.catalogueservice.parser.JacksonParser;
import ua.shukai.microservice.app.catalogueservice.parser.model.CitiesDataJSON;
import ua.shukai.microservice.app.catalogueservice.service.RegionService;
import ua.shukai.microservice.app.catalogueservice.utils.NovaposhtaRequest;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RegionServiceImpl implements RegionService {
    private final WebClient webClient;
    private final RegionMapper regionMapper;
    private final RegionRepository regionRepository;
    private final NovaposhtaRequest novaposhtaRequest;
    private final JacksonParser<CitiesDataJSON> jacksonParser;

    private String sendPostRequestByValue(String request) {
        return this.webClient.post()
                .uri("")
                .bodyValue(request)
                .retrieve()
                .bodyToMono(String.class)
        .block();
    }

    @Override
    @Transactional
    public List<RegionDTO> findRegions(String partName) {
        String request = this.novaposhtaRequest.getCitiesByPartName(partName);
        String json = this.sendPostRequestByValue(request);
        CitiesDataJSON parsedJson = this.jacksonParser.parse(json, CitiesDataJSON.class);
        return this.regionMapper.map(parsedJson);
    }

    @Override
    @Transactional
    public RegionEntity findByRegionOrCreate(RegionDTO region) {
        return this.regionRepository.findByDescription(region.getDescription()).orElseGet(() ->
                this.regionRepository.save(RegionEntity.builder()
                    .cityName(region.getCityName())
                    .regionName(region.getRegionName())
                    .description(region.getDescription())
            .build())
        );
    }
}
