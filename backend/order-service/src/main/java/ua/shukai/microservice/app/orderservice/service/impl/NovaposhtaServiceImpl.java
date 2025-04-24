package ua.shukai.microservice.app.orderservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ua.shukai.microservice.app.orderservice.controller.novaposhta.dto.WarehouseDTO;
import ua.shukai.microservice.app.orderservice.mapper.NovaposhtaMapper;
import ua.shukai.microservice.app.orderservice.parser.JacksonParser;
import ua.shukai.microservice.app.orderservice.parser.model.WarehousesDataModel;
import ua.shukai.microservice.app.orderservice.service.NovaposhtaService;
import ua.shukai.microservice.app.orderservice.utils.NovaposhtaClient;
import ua.shukai.microservice.app.orderservice.utils.NovaposhtaRequestFactory;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NovaposhtaServiceImpl implements NovaposhtaService {
    private final NovaposhtaClient novaposhtaClient;
    private final NovaposhtaMapper novaposhtaMapper;
    private final JacksonParser<WarehousesDataModel> jacksonParser;
    private final NovaposhtaRequestFactory novaposhtaRequestFactory;

    @Override
    public List<WarehouseDTO> getWarehousesByCityRef(String cityRef) {
        String request = this.novaposhtaRequestFactory.getWarehousesByCityRef(cityRef);
        String json = this.novaposhtaClient.sendPostRequest(request);
        WarehousesDataModel data = this.jacksonParser.parse(json, WarehousesDataModel.class);
        return this.novaposhtaMapper.mapToWarehouses(data);
    }
}
