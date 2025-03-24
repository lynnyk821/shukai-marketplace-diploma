package ua.shukai.microservice.app.userservice.database.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import ua.shukai.microservice.app.userservice.utils.PasswordEncoderHolder;

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

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String phoneNumber;

    private Timestamp visitingTime;

    @ManyToOne
    @JoinColumn(name = "image_id")
    private ImageEntity image;

}
