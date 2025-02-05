package ua.shukai.microservice.app.catalogueservice.database.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="ad_delivery_methods")
@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdDeliveryMethodEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "ad_id", nullable = false)
    private AdvertisementEntity advertisement;

    @ManyToOne
    @JoinColumn(name = "delivery_method_id", nullable = false)
    private DeliveryMethodEntity deliveryMethod;
}
