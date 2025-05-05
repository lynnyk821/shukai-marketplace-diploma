package ua.shukai.microservice.app.userservice.database.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.shukai.microservice.app.userservice.database.entity.UserRoleEntity;
import ua.shukai.microservice.app.userservice.types.UserRole;

import java.util.Optional;

public interface UserRoleRepository extends JpaRepository<UserRoleEntity, Long> {
    Optional<UserRoleEntity> findByRoleName(UserRole role);
}
