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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer price;
}
