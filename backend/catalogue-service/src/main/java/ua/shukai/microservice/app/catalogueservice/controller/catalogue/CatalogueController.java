package ua.shukai.microservice.app.catalogueservice.controller.catalogue;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.GetAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdDTO;
import ua.shukai.microservice.app.catalogueservice.service.CatalogueService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/catalogue")
public class CatalogueController {
    private final CatalogueService catalogueService;

    @GetMapping("/{id}")
    public ResponseEntity<GetAdDTO> getAdvertisementById(@PathVariable("id") Long id) {
        GetAdDTO dto = this.catalogueService.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    public ResponseEntity<CreateAdDTO> createNewAdvertisement(@RequestBody CreateAdDTO dto) {
        this.catalogueService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(dto);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> updateAdvertisementById(@PathVariable("id") Long id,
                                                        @RequestBody UpdateAdDTO dto) {
        this.catalogueService.update(id, dto);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdvertisementById(@PathVariable("id") Long id) {
        this.catalogueService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
