package ua.shukai.microservice.app.catalogueservice.controller.home;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ua.shukai.microservice.app.catalogueservice.controller.home.dto.GetHomeAdsDTO;
import ua.shukai.microservice.app.catalogueservice.service.HomeService;

@RestController
@RequestMapping("/home")
@RequiredArgsConstructor
public class HomeController {
    private final HomeService homeService;

    @GetMapping
    public ResponseEntity<GetHomeAdsDTO> getHomeAdvertisements() {
        GetHomeAdsDTO homeAdvertisements = this.homeService.getHomeAdvertisements();
        return ResponseEntity.ok().body(homeAdvertisements);
    }
}
