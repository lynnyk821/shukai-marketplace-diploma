package ua.shukai.microservice.app.searchservice.controller;

import jakarta.validation.constraints.Min;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ua.shukai.microservice.app.searchservice.controller.dto.SearchAdvertisementDTO;
import ua.shukai.microservice.app.searchservice.service.SearchService;
import ua.shukai.microservice.app.searchservice.type.SortType;

import java.util.List;

@RestController
@RequestMapping("/search")
@RequiredArgsConstructor
public class SearchController {
    private final SearchService searchService;

    @GetMapping
    public ResponseEntity<List<SearchAdvertisementDTO>> search(
            @RequestParam(required = false) String value,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) @Min(1) Integer priceTo,
            @RequestParam(required = false) @Min(1) Integer priceFrom,
            @RequestParam(required = false, defaultValue = "Найновіші") String sortType,
            @RequestParam(required = false, defaultValue = "1") @Min(0) Integer page,
            @RequestParam(required = false, defaultValue = "25") @Min(0) Integer limit
    ) {
        Pageable pageable = PageRequest.of(page, limit, SortType.of(sortType));
        List<SearchAdvertisementDTO> searchResult = this.searchService.findAll(
            value, category, priceFrom, priceTo, pageable
        );
        return ResponseEntity.ok().body(searchResult);
    }
}

