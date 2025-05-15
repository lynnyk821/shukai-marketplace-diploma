package ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
@AllArgsConstructor
public class MyAdsResponse {
    private List<MyAdDTO> ads;
    private int totalPageCount;
}
