package ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Builder
@Getter @Setter
public class MyAdDTO {
    private String id;
    private String title;
    private Integer price;
    private String image;
    private Timestamp createdAt;
}
