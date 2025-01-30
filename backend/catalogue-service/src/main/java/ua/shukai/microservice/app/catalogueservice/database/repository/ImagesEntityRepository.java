package ua.shukai.microservice.app.catalogueservice.database.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.shukai.microservice.app.catalogueservice.database.entity.ImageEntity;

public interface ImagesEntityRepository extends JpaRepository<ImageEntity, Long> { }
