package ua.shukai.microservice.app.catalogueservice.database.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="ad_images")
@Builder
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class AdImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "ad_id", nullable = false)
    private AdvertisementEntity advertisement;

    @ManyToOne
    @JoinColumn(name = "image_id", nullable = false)
    private ImageEntity image;
}
