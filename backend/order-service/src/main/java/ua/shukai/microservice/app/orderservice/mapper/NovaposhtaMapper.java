package ua.shukai.microservice.app.orderservice.mapper;

import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.orderservice.controller.novaposhta.dto.WarehouseDTO;
import ua.shukai.microservice.app.orderservice.parser.model.WarehousesDataModel;

import java.util.List;

@Component
public class NovaposhtaMapper {

    public List<WarehouseDTO> mapToWarehouses(WarehousesDataModel data) {
        return data.getData().stream()
                .filter(warehouse -> warehouse.getWarehouse().contains("Відділення"))
                .map(warehouse -> new WarehouseDTO(warehouse.getWarehouse(), warehouse.getSchedule()))
                .toList();
    }
}
