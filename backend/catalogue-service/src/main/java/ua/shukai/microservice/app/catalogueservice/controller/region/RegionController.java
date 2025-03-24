package ua.shukai.microservice.app.catalogueservice.controller.region;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ua.shukai.microservice.app.catalogueservice.controller.region.dto.RegionDTO;
import ua.shukai.microservice.app.catalogueservice.service.RegionService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/region")
public class RegionController {
    private final RegionService regionService;

    @GetMapping
    public ResponseEntity<List<RegionDTO>> region(@RequestParam String partName) {
        List<RegionDTO> regionDTOS = this.regionService.findRegions(partName);
        return ResponseEntity.ok().body(regionDTOS);
    }
}
