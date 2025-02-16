package ua.shukai.microservice.app.userservice.database.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Entity
@Table(name = "users")
@Builder
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String phoneNumber;

    @Column(nullable = false)
    private Timestamp visitingTime;

    @ManyToOne
    @JoinColumn(name = "region_id", nullable = false)
    private RegionEntity region;

    @ManyToOne
    @JoinColumn(name = "image_id", nullable = false)
    private RegionEntity image;
}
