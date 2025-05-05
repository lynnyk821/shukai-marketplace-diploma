    package ua.shukai.microservice.app.userservice.database.entity;
    
    import jakarta.persistence.*;
    import lombok.*;
    import org.hibernate.annotations.GenericGenerator;
    
    import java.util.UUID;
    
    @Entity
    @Table(name = "ad_images")
    @Builder
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public class AdvertisementImageEntity {
    
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
    
        @Column(nullable = false, columnDefinition = "TEXT")
        private String imageUrl;
    
        @ManyToOne
        @JoinColumn(name = "advertisement_id")
        private AdvertisementEntity advertisement;
    }
