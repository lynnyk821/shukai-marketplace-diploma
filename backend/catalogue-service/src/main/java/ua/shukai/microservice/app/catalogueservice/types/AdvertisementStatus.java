package ua.shukai.microservice.app.catalogueservice.types;

import lombok.Getter;

import java.util.Map;

@Getter
public enum AdvertisementStatus {
    PENDING("В обробці"),
    APPROVED("Активні"),
    REJECTED("Відхилені");

    private final String localized;

    AdvertisementStatus(String localized) {
        this.localized = localized;
    }

    private static final Map<String, AdvertisementStatus> LOCALIZED_MAP = Map.of(
            "В обробці", PENDING,
            "Активні", APPROVED,
            "Відхилені", REJECTED
    );

    public static AdvertisementStatus fromLocalized(String name) {
        AdvertisementStatus status = LOCALIZED_MAP.get(name);
        if (status == null) {
            throw new IllegalArgumentException("Невідомий статус: " + name);
        }
        return status;
    }
}