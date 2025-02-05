package ua.shukai.microservice.app.catalogueservice.database.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="categories")
@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class CategoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String path;
}
