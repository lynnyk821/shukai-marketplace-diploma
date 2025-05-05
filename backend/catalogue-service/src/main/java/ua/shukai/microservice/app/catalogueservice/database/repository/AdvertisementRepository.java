package ua.shukai.microservice.app.catalogueservice.database.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import ua.shukai.microservice.app.catalogueservice.database.entity.AdvertisementEntity;
import ua.shukai.microservice.app.catalogueservice.types.AdvertisementStatus;

public interface AdvertisementRepository extends JpaRepository<AdvertisementEntity, String> {
    Page<AdvertisementEntity> findAllByStatusAndCategory_Name(AdvertisementStatus status, String name, Pageable pageable);

    Page<AdvertisementEntity> findAllByStatusAndUser_Id(AdvertisementStatus status, Long userId, Pageable pageable);

    Page<AdvertisementEntity> findAllByStatus(AdvertisementStatus status, Pageable pageable);
}
