package ua.shukai.microservice.app.userservice.database.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.shukai.microservice.app.userservice.database.entity.ImageEntity;

public interface ImageRepository extends JpaRepository<ImageEntity, Long> { }
