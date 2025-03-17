package ua.shukai.microservice.app.catalogueservice.database.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="regions")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String description;

    @Column(nullable = false)
    private String cityName;

    @Column(nullable = false)
    private String regionName;
}
