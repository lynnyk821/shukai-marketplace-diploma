package ua.shukai.microservice.app.catalogueservice.database.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.shukai.microservice.app.catalogueservice.database.entity.UserEntity;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByUserId(Long userId);
}
