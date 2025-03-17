package ua.shukai.microservice.app.searchservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import ua.shukai.microservice.app.searchservice.controller.dto.RegionDTO;
import ua.shukai.microservice.app.searchservice.mapper.NovaposhtaMapper;
import ua.shukai.microservice.app.searchservice.parser.JacksonParser;
import ua.shukai.microservice.app.searchservice.parser.model.CitiesDataJSON;
import ua.shukai.microservice.app.searchservice.service.RegionService;
import ua.shukai.microservice.app.searchservice.utils.NovaposhtaRequest;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RegionServiceImpl implements RegionService {
    private final WebClient webClient;
    private final NovaposhtaRequest novaposhtaRequest;
    private final JacksonParser<CitiesDataJSON> jacksonParser;
    private final NovaposhtaMapper novaposhtaMapper;

    private String sendPostRequestByValue(String request) {
        return this.webClient.post()
                .uri("")
                .bodyValue(request)
                .retrieve()
                .bodyToMono(String.class).block();
    }

    @Override
    public List<RegionDTO> findRegions(String partName) {
        String request = this.novaposhtaRequest.getCitiesByPartName(partName);
        String json = this.sendPostRequestByValue(request);
        CitiesDataJSON parsedJson = this.jacksonParser.parse(json, CitiesDataJSON.class);
        return this.novaposhtaMapper.map(parsedJson);
    }
}
