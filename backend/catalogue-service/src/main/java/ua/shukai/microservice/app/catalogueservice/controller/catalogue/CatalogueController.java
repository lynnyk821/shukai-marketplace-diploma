package ua.shukai.microservice.app.catalogueservice.controller.catalogue;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.GetAdDTO;
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
}
