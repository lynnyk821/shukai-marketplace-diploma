package ua.shukai.microservice.app.orderservice.controller.order.dto.request;

import lombok.Data;

@Data
public class CreateOrderRequest {
    private Long adId;
    private Long userId;
    private String warehouse;
    private String paymentMethod;
    private String deliveryMethod;

    @Data
    private static class Advertisement {
        private Long id;
        private Long producerId;
        private String name;
        private Integer price;
    }
}
