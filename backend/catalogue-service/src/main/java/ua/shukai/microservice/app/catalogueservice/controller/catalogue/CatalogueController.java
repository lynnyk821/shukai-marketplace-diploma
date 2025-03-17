package ua.shukai.microservice.app.catalogueservice.controller.catalogue;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.GetAdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.service.CatalogueService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/catalogue")
public class CatalogueController {
    private final CatalogueService catalogueService;

    @GetMapping("/{id}")
    public ResponseEntity<GetAdvertisementDTO> getAdvertisementById(@PathVariable("id") Long id) {
        GetAdvertisementDTO dto = this.catalogueService.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    public ResponseEntity<CreateAdvertisementDTO> createNewAdvertisement(@RequestBody CreateAdvertisementDTO dto) {
        System.out.println("Отримано запит:");
        System.out.println(
                "RegionName: " + dto.getRegion().getRegionName() + "\n" +
                "CityName: " + dto.getRegion().getCityName() + "\n" +
                "Description: " + dto.getRegion().getDescription() + "\n");
        this.catalogueService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }

    @PatchMapping
    public ResponseEntity<Void> updateAdvertisementById(@RequestBody UpdateAdvertisementDTO dto) {
        this.catalogueService.update(dto);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdvertisementById(@PathVariable("id") Long id) {
        this.catalogueService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
