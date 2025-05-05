package ua.shukai.microservice.app.catalogueservice.controller.catalogue;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
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

    @GetMapping("/{uuid}")
    public ResponseEntity<GetAdDTO> getAdvertisementById(@PathVariable String uuid) {
        GetAdDTO dto = this.catalogueService.findByIdAdvertisementWithStatusApproved(uuid);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    public ResponseEntity<CreateAdDTO> saveBeforeApprovalWithPendingStatus(@RequestBody @Valid CreateAdDTO dto) {
        this.catalogueService.saveAdWithPendingStatusAndPublishItForReview(dto);
        return ResponseEntity.ok().body(dto);
    }

    @PatchMapping("/{uuid}")
    public ResponseEntity<Void> updateAdvertisementById(@PathVariable String uuid,
                                                        @RequestBody @Valid UpdateAdDTO dto) {
        this.catalogueService.updateAdvertisementAndPublishToReview(uuid, dto);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{uuid}")
    public ResponseEntity<Void> deleteAdvertisementById(@PathVariable String uuid) {
        this.catalogueService.deleteById(uuid);
        return ResponseEntity.noContent().build();
    }
}
