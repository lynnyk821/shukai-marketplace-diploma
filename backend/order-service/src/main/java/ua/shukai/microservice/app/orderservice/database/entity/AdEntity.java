package ua.shukai.microservice.app.orderservice.database.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="advertisements")
@Builder
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdEntity {

    @Id
    @Column(nullable = false, updatable = false)
    private String id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String image;

    @Column(nullable = false)
    private Integer price;
}
