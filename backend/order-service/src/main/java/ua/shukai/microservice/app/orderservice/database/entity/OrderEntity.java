package ua.shukai.microservice.app.orderservice.database.entity;

import jakarta.persistence.*;
import lombok.*;
import ua.shukai.microservice.app.orderservice.type.OrderStatus;

import java.sql.Timestamp;
import java.time.Instant;

@Entity
@Table(name="orders")
@Builder
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderEntity {

    @Id
    @Column(nullable = false, updatable = false)
    private String id;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private UserEntity customer;

    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private UserEntity seller;

    @ManyToOne
    @JoinColumn(name = "ad_id", nullable = false)
    private AdEntity ad;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private OrderStatus status;

    @Column(nullable = false)
    private Timestamp createdAt;

    @Column(nullable = false)
    private String warehouse;

    @Column(nullable = false)
    private String paymentMethod;

    @Column(nullable = false)
    private String deliveryMethod;

    @PrePersist
    protected void onCreate() {
        this.createdAt = Timestamp.from(Instant.now());
        this.status = OrderStatus.DEFAULT;
    }
}
