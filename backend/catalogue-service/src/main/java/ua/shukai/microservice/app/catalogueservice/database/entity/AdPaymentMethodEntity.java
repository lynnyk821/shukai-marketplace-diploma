package ua.shukai.microservice.app.catalogueservice.database.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "ad_payment_methods")
@Builder
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdPaymentMethodEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "ad_id", nullable = false)
    private AdvertisementEntity advertisement;

    @ManyToOne
    @JoinColumn(name = "payment_method_id", nullable = false)
    private PaymentMethodEntity paymentMethod;
}
