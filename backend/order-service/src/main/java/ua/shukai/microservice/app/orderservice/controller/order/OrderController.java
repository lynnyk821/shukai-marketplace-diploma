package ua.shukai.microservice.app.orderservice.controller.order;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.shukai.microservice.app.orderservice.controller.order.dto.request.CreateOrderRequest;
import ua.shukai.microservice.app.orderservice.controller.order.dto.request.UpdateOrderRequest;
import ua.shukai.microservice.app.orderservice.controller.order.dto.response.OrderDTO;
import ua.shukai.microservice.app.orderservice.controller.order.dto.response.PurchasesResponse;
import ua.shukai.microservice.app.orderservice.controller.order.dto.response.SalesResponse;
import ua.shukai.microservice.app.orderservice.service.OrderService;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @GetMapping("/{id}")
    public ResponseEntity<OrderDTO> getById(@PathVariable("id") String id) {
        OrderDTO response = this.orderService.getById(id);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping("/purchases/{userId}")
    public ResponseEntity<PurchasesResponse> getPurchases(
            @PathVariable("userId") Long id,
            @RequestParam(required = false, defaultValue = "0")  Integer page,
            @RequestParam(required = false, defaultValue = "25") Integer limit
    ) {
        Pageable pageable = PageRequest.of(page, limit);
        PurchasesResponse response = this.orderService.getPurchasesByUserId(id, pageable);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping("/sales/{userId}")
    public ResponseEntity<SalesResponse> getSales(
            @PathVariable("userId") Long id,
            @RequestParam(required = false, defaultValue = "0")  Integer page,
            @RequestParam(required = false, defaultValue = "25") Integer limit
    ) {
        Pageable pageable = PageRequest.of(page, limit);
        SalesResponse response = this.orderService.getSalesByUserId(id, pageable);
        return ResponseEntity.ok().body(response);
    }

    @PostMapping
    public ResponseEntity<Void> create(@RequestBody CreateOrderRequest request) {
        this.orderService.create(request);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> updateById(@PathVariable("id") String id,
                                           @RequestBody UpdateOrderRequest request) {
        this.orderService.updateById(id, request);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") String id) {
        this.orderService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
