package ua.shukai.microservice.app.userservice.database.entity;


import jakarta.persistence.*;
import lombok.*;
import ua.shukai.microservice.app.userservice.types.UserRole;

@Entity
@Table(name = "user_roles")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserRoleEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, unique = true)
    private UserRole roleName;
}
