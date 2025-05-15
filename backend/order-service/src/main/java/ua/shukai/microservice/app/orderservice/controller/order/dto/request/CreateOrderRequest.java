package ua.shukai.microservice.app.orderservice.controller.order.dto.request;

import lombok.Data;

@Data
public class CreateOrderRequest {
    private Seller seller;
    private Customer customer;
    private Delivery delivery;
    private Advertisement advertisement;
    private String paymentMethod;

    @Data
    public static class Customer {
        private Long id;
        private String lastName;
        private String firstName;
        private String middleName;
        private String phoneNumber;
    }

    @Data
    public static class Seller {
        private Long id;
    }

    @Data
    public static class Delivery {
        private String service;
        private String city;
        private String warehouse;
    }

    @Data
    public static class Advertisement {
        private String id;
        private String title;
        private String image;
        private Integer price;
    }
}
