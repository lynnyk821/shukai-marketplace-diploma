package ua.shukai.microservice.app.catalogueservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v3/catalogue")
public class CatalogueController {

    @GetMapping("/all")
    public String fetchCatalogue() {
        return "Catalogue fetched";
    }
}
