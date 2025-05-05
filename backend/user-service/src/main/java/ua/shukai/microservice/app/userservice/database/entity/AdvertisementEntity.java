package ua.shukai.microservice.app.userservice.database.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.Accessors;
import ua.shukai.microservice.app.userservice.types.AdvertisementStatus;

import java.util.List;

@Entity
@Table(name = "advertisements")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class AdvertisementEntity {

    @Id
    @Column(nullable = false, updatable = false)
    private String uuid;

    private String title;

    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AdvertisementStatus status;

    @OneToMany(
            mappedBy = "advertisement",
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.LAZY
    )
    private List<AdvertisementImageEntity> images;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;
}