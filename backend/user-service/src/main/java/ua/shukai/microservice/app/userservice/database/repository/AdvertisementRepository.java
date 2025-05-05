package ua.shukai.microservice.app.userservice.database.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import ua.shukai.microservice.app.userservice.database.entity.AdvertisementEntity;
import ua.shukai.microservice.app.userservice.types.AdvertisementStatus;

public interface AdvertisementRepository extends JpaRepository<AdvertisementEntity, String> {
    Page<AdvertisementEntity> findByStatus(AdvertisementStatus status, Pageable pageable);
}
