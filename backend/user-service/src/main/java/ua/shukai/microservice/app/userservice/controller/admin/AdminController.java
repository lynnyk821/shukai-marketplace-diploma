package ua.shukai.microservice.app.userservice.controller.admin;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.shukai.microservice.app.userservice.controller.admin.dto.ReviewAdvertisementDTO;
import ua.shukai.microservice.app.userservice.controller.admin.dto.ReviewAdvertisementResponse;
import ua.shukai.microservice.app.userservice.service.AdvertisementService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {
    private final AdvertisementService advertisementService;

    @GetMapping("/advertisements")
    public ResponseEntity<ReviewAdvertisementResponse> getNewAdvertisements(@RequestParam(defaultValue = "0") int page,
                                                                            @RequestParam(defaultValue = "25") int size) {
        Pageable pageable = PageRequest.of(page, size);
        ReviewAdvertisementResponse response = this.advertisementService.getNewAdvertisements(pageable);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping("/advertisements/{uuid}")
    public ResponseEntity<ReviewAdvertisementDTO> getAdvertisement(@PathVariable String uuid) {
        ReviewAdvertisementDTO ad = this.advertisementService.getAdvertisementById(uuid);
        return ResponseEntity.ok().body(ad);
    }

    @PostMapping("/advertisements/{uuid}/approve")
    public ResponseEntity<Void> approveAdvertisement(@PathVariable String uuid) {
        this.advertisementService.approveAdvertisement(uuid);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/advertisements/{uuid}/reject")
    public ResponseEntity<Void> deleteAndPublishApprovedAdvertisement(@PathVariable String uuid) {
        this.advertisementService.rejectAdvertisement(uuid);
        return ResponseEntity.noContent().build();
    }
}
