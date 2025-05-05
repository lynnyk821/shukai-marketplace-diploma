package ua.shukai.microservice.app.userservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.shukai.microservice.app.userservice.builder.AdvertisementBuilder;
import ua.shukai.microservice.app.userservice.controller.admin.dto.ReviewAdvertisementDTO;
import ua.shukai.microservice.app.userservice.controller.admin.dto.ReviewAdvertisementResponse;
import ua.shukai.microservice.app.userservice.database.entity.AdvertisementEntity;
import ua.shukai.microservice.app.userservice.database.entity.AdvertisementImageEntity;
import ua.shukai.microservice.app.userservice.database.entity.UserEntity;
import ua.shukai.microservice.app.userservice.database.repository.AdvertisementRepository;
import ua.shukai.microservice.app.userservice.database.repository.UserRepository;
import ua.shukai.microservice.app.userservice.kafka.KafkaService;
import ua.shukai.microservice.app.userservice.kafka.consumer.dto.KafkaReviewAdvertisementDTO;
import ua.shukai.microservice.app.userservice.service.AdvertisementService;
import ua.shukai.microservice.app.userservice.types.AdvertisementStatus;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class AdvertisementServiceImpl implements AdvertisementService {
    private final KafkaService kafkaService;
    private final AdvertisementBuilder advertisementBuilder;

    private final UserRepository userRepository;
    private final AdvertisementRepository advertisementRepository;

    @Override
    @Transactional(readOnly = true)
    public ReviewAdvertisementResponse getNewAdvertisements(Pageable pageable) {
        Page<AdvertisementEntity> ads = this.advertisementRepository.findByStatus(AdvertisementStatus.NEW, pageable);
        List<ReviewAdvertisementDTO> listAds = ads.map(this.advertisementBuilder::buildAdvertisementDTO).toList();
        return new ReviewAdvertisementResponse(listAds, ads.getTotalPages());
    }

    @Override
    public ReviewAdvertisementDTO getAdvertisementById(String uuid) {
        AdvertisementEntity advertisement = findAdvertisementById(uuid).setStatus(AdvertisementStatus.IN_REVIEW);
        return this.advertisementBuilder.buildAdvertisementDTO(advertisement);
    }

    @Override
    public void approveAdvertisement(String uuid) {
        AdvertisementEntity ad = findAdvertisementById(uuid).setStatus(AdvertisementStatus.APPROVED);
        this.advertisementRepository.delete(ad);
        this.kafkaService.publishApprovedAdvertisement(uuid);
    }

    @Override
    public void rejectAdvertisement(String uuid) {
        AdvertisementEntity ad = findAdvertisementById(uuid).setStatus(AdvertisementStatus.REJECTED);
        this.advertisementRepository.delete(ad);
        this.kafkaService.publishRejectedAdvertisement(uuid);
    }

    @Override
    public void saveAdvertisementForReview(KafkaReviewAdvertisementDTO dto) {
        UserEntity user = this.userRepository.findByEmail(dto.getAuthorEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        AdvertisementEntity advertisement = AdvertisementEntity.builder()
                .uuid(dto.getUuid())
                .title(dto.getTitle())
                .description(dto.getDescription())
                .user(user)
                .status(AdvertisementStatus.NEW)
        .build();

        List<AdvertisementImageEntity> images = dto.getImages().stream()
                .map(img -> AdvertisementImageEntity.builder()
                        .advertisement(advertisement)
                        .imageUrl(img)
                        .build())
                .toList();

        advertisement.setImages(images);

        this.advertisementRepository.save(advertisement);
    }

    private AdvertisementEntity findAdvertisementById(String uuid) {
        return this.advertisementRepository.findById(uuid)
                .orElseThrow(() -> new RuntimeException("Advertisement not found"));
    }
}
