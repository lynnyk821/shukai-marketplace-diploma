package ua.shukai.microservice.app.catalogueservice.controller.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ua.shukai.microservice.app.catalogueservice.service.AdvertisementService;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final AdvertisementService advertisementService;

    @GetMapping("/ads/{id}")
    public ResponseEntity<?> getAdsByUserId(@PathVariable("id") Long userId) {
        List<Object> sales = this.advertisementService.getAdsByUserId(userId);
        return ResponseEntity.ok(sales);
    }

    @GetMapping("/sales/{id}")
    public ResponseEntity<?> getSalesByUserId(@PathVariable("id") Long userId) {
        List<Object> sales = this.advertisementService.getSalesByUserId(userId);
        return ResponseEntity.ok(sales);
    }

    @GetMapping("/purchases/{id}")
    public ResponseEntity<Object> getPurchasesByUserId(@PathVariable("id") Long userId) {
        List<Object> purchases = this.advertisementService.getPurchaseByUserId(userId);
        return ResponseEntity.ok(purchases);
    }
}
