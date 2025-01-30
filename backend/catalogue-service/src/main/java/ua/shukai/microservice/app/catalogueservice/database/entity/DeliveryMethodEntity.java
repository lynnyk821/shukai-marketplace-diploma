package ua.shukai.microservice.app.catalogueservice.database.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="delivery_methods")
@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryMethodEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String deliveryMethod;
}
