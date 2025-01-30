package ua.shukai.microservice.app.catalogueservice.database.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;
import java.util.List;

@Entity
@Table(name="advertisements")
@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, updatable = false)
    private Timestamp createdAt;

    @Column(nullable = false)
    private String name;

    @Column(length = 2500)
    private String description;

    @Column(nullable = false)
    private Integer favoritesCount;

    private Integer userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private CategoryEntity category;

    @OneToMany(mappedBy = "advertisement", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ImageEntity> images;

    @ManyToMany
    @JoinTable(
            name = "advertisement_delivery_methods",
            joinColumns = @JoinColumn(name = "advertisement_id"),
            inverseJoinColumns = @JoinColumn(name = "delivery_method_id")
    )
    private List<DeliveryMethodEntity> deliveryMethods;

    @ManyToMany
    @JoinTable(
            name = "advertisement_payment_methods",
            joinColumns = @JoinColumn(name = "advertisement_id"),
            inverseJoinColumns = @JoinColumn(name = "payment_method_id")
    )
    private List<PaymentMethodEntity> paymentMethods;
}

