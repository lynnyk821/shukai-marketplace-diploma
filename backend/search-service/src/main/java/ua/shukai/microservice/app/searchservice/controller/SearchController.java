package ua.shukai.microservice.app.searchservice.controller;

import jakarta.validation.constraints.Min;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ua.shukai.microservice.app.searchservice.client.CatalogueClient;
import ua.shukai.microservice.app.searchservice.service.SearchService;

@RestController
@RequestMapping("/search")
@RequiredArgsConstructor
public class SearchController {
    private final CatalogueClient catalogueClient;

    @GetMapping("/info")
    public String getSearch(){
        return this.catalogueClient.getCatalogue();
    }
}

/*@GetMapping
    public String search(
            @RequestParam(defaultValue = "", required = false) String category,
            @RequestParam(required = false, defaultValue = "") String value,
            @RequestParam(required = false, defaultValue = "1") @Min(1) Integer page,
            @RequestParam(required = false, defaultValue = "POPULARITY") String sortType,
            @RequestParam(required = false, defaultValue = "0") @Min(0) Integer priceFrom,
            @RequestParam(required = false, defaultValue = "1000000") Integer priceTo
    ) {
        return "Search result";
    }*/
