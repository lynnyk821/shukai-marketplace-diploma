package ua.shukai.microservice.app.catalogueservice.database.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="images")
@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class ImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "image", nullable = false, columnDefinition = "TEXT")
    private String imageInBase64Format;

    @ManyToOne
    @JoinColumn(name = "ad_id", nullable = false)
    private AdEntity advertisement;
}
