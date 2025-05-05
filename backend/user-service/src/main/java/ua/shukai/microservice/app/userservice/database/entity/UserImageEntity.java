package ua.shukai.microservice.app.userservice.database.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "user_images")
@Builder
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "image")
    private String imageBase64;
}
