package ua.shukai.microservice.app.orderservice.controller.order;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.shukai.microservice.app.orderservice.controller.order.dto.request.CreateOrderRequest;
import ua.shukai.microservice.app.orderservice.controller.order.dto.request.UpdateOrderRequest;
import ua.shukai.microservice.app.orderservice.controller.order.dto.OrderDTO;
import ua.shukai.microservice.app.orderservice.service.OrderService;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @GetMapping("/{id}")
    public ResponseEntity<OrderDTO> getById(@PathVariable("id") Long id) {
        OrderDTO response = this.orderService.getById(id);
        return ResponseEntity.ok().body(response);
    }

    @PostMapping
    public ResponseEntity<Void> create(@RequestBody CreateOrderRequest request) {
        this.orderService.create(request);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> updateById(@PathVariable("id") Long id,
                                           @RequestBody UpdateOrderRequest request) {
        this.orderService.updateById(id, request);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable("id") Long id) {
        this.orderService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
