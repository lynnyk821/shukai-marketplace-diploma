package ua.shukai.microservice.app.searchservice.type;

import org.springframework.data.domain.Sort;

import java.util.Arrays;

public enum SortType {
    MAX_PRICE("price_desc"),
    MIN_PRICE("price_asc"),
    NEW_ADS("new_ads");

    private final String value;

    SortType(String value) {
        this.value = value;
    }

    public static Sort of(String sortValue) {
        SortType sortType = Arrays.stream(SortType.values())
                .filter(type -> type.value.equalsIgnoreCase(sortValue))
                .findFirst()
                .orElse(NEW_ADS);

        return switch (sortType) {
            case MIN_PRICE -> Sort.by(Sort.Order.asc("price"));
            case MAX_PRICE -> Sort.by(Sort.Order.desc("price"));
            case NEW_ADS -> Sort.by(Sort.Order.desc("createdAt"));
        };
    }
}
