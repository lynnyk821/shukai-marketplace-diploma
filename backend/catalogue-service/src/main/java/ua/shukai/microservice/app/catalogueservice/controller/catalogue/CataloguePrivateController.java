package ua.shukai.microservice.app.catalogueservice.controller.catalogue;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.MyAdsResponse;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdDTO;
import ua.shukai.microservice.app.catalogueservice.service.AdvertisementService;
import ua.shukai.microservice.app.catalogueservice.service.CatalogueService;
import ua.shukai.microservice.app.catalogueservice.types.AdvertisementStatus;

@RestController
@RequiredArgsConstructor
@RequestMapping("/private/catalogue")
public class CataloguePrivateController {
    private final CatalogueService catalogueService;
    private final AdvertisementService advertisementService;

    @PostMapping
    public ResponseEntity<CreateAdDTO> saveBeforeApprovalWithPendingStatus(@RequestBody @Valid CreateAdDTO dto) {
        this.catalogueService.saveAdWithPendingStatusAndPublishItForReview(dto);
        return ResponseEntity.ok().body(dto);
    }

    @PatchMapping("/{uuid}")
    public ResponseEntity<Void> updateAdvertisementById(@PathVariable String uuid, @RequestBody @Valid UpdateAdDTO dto) {
        this.catalogueService.updateAdvertisementAndPublishToReview(uuid, dto);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{uuid}")
    public ResponseEntity<Void> deleteAdvertisementById(@PathVariable String uuid) {
        this.catalogueService.deleteById(uuid);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/my-listings")
    public ResponseEntity<MyAdsResponse> getAdsByUserIdAndStatuses(
            @RequestParam Long userId,
            @RequestParam(required = false, defaultValue = "0")  Integer page,
            @RequestParam(required = false, defaultValue = "25") Integer limit,
            @RequestParam(required = false, defaultValue = "APPROVED") String status
    ) {
        PageRequest pageRequest = PageRequest.of(page, limit);
        AdvertisementStatus adStatus = AdvertisementStatus.fromLocalized(status);
        MyAdsResponse response = this.advertisementService.getAdsByUserIdAndStatus(userId, adStatus, pageRequest);
        return ResponseEntity.ok(response);
    }
}
