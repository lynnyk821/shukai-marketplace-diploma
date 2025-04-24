package ua.shukai.microservice.app.orderservice.controller.novaposhta;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ua.shukai.microservice.app.orderservice.controller.novaposhta.dto.WarehouseDTO;
import ua.shukai.microservice.app.orderservice.service.NovaposhtaService;

import java.util.List;

@RestController
@RequestMapping("/novaposhta")
@RequiredArgsConstructor
public class NovaposhtaController {
    private final NovaposhtaService novaposhtaService;

    @GetMapping("/warehouses")
    public ResponseEntity<List<WarehouseDTO>> getWarehousesByCityRef(@RequestParam("cityRef") String cityRef) {
        List<WarehouseDTO> warehouses = this.novaposhtaService.getWarehousesByCityRef(cityRef);
        return ResponseEntity.ok().body(warehouses);
    }
}
