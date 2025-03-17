package ua.shukai.microservice.app.chatservice.database.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="users")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;
}
