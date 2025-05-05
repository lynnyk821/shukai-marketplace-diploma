package ua.shukai.microservice.app.catalogueservice.database.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.Accessors;
import ua.shukai.microservice.app.catalogueservice.types.AdvertisementStatus;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

@Entity
@Table(name="advertisements")
@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@Accessors(chain = true)
public class AdvertisementEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String uuid;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private Integer price;

    @Column(length = 2500)
    private String description;

    @Column(nullable = false)
    private Integer favoritesCount;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AdvertisementStatus status;

    @Column(nullable = false, updatable = false)
    private Timestamp createdAt;

    @OneToMany(mappedBy = "advertisement", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AdImageEntity> images;

    @ManyToOne
    @JoinColumn(name = "region_id", nullable = false)
    private RegionEntity region;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private CategoryEntity category;

    @OneToMany(mappedBy = "advertisement", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AdDeliveryMethodEntity> deliveryMethods;

    @OneToMany(mappedBy = "advertisement", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AdPaymentMethodEntity> paymentMethods;

    @PrePersist
    protected void onCreate() {
        this.createdAt = Timestamp.from(Instant.now());
        this.favoritesCount = 0;
    }
}

