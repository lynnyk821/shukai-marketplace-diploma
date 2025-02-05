package ua.shukai.microservice.app.catalogueservice.database.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import ua.shukai.microservice.app.catalogueservice.database.entity.AdvertisementEntity;

import java.util.Optional;

public interface AdvertisementRepository extends JpaRepository<AdvertisementEntity, Long> {
    Page<AdvertisementEntity> findAllByCategory_Name(String name, Pageable pageable);
}
