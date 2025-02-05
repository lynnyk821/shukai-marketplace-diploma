package ua.shukai.microservice.app.catalogueservice.database.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="payment_methods")
@Builder
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentMethodEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String method;
}
