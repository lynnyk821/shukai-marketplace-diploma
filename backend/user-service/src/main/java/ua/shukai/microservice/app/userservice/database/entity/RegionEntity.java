package ua.shukai.microservice.app.userservice.database.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "regions")
@Builder
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String region;
}
