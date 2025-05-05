package ua.shukai.microservice.app.orderservice.database.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="users")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity {
    @Id
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String phoneNumber;
}
