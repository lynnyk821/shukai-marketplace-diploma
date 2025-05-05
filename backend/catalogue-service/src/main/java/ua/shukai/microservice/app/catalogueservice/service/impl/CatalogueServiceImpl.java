package ua.shukai.microservice.app.catalogueservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.AdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.GetAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.*;
import ua.shukai.microservice.app.catalogueservice.kafka.service.KafkaService;
import ua.shukai.microservice.app.catalogueservice.mapper.AdvertisementMapper;
import ua.shukai.microservice.app.catalogueservice.service.*;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CatalogueServiceImpl implements CatalogueService {
    private final KafkaService kafkaService;
    private final AdvertisementMapper advertisementMapper;
    private final AdvertisementService advertisementService;

    @Transactional(readOnly = true)
    public GetAdDTO findByIdAdvertisementWithStatusApproved(String uuid) {
        AdvertisementEntity advertisement = this.advertisementService.findByIdOrThrow(uuid);
        AdvertisementDTO advertisementDTO = this.advertisementMapper.mapToAdDTO(advertisement);

        List<AdvertisementEntity> moreAds = this.advertisementService.findMoreById(advertisement.getUser().getId());
        List<GetAdDTO.MoreAd> moreAdvertisementDTOs = this.advertisementMapper.mapToMoreAds(moreAds);

        return buildGetResponse(advertisementDTO, moreAdvertisementDTOs);
    }

    @Override
    public void saveAdWithPendingStatusAndPublishItForReview(CreateAdDTO dto) {
        AdvertisementEntity advertisement = this.advertisementService.saveBeforeApprovalWithPendingStatus(dto);
        this.kafkaService.publishAdToReview(advertisement);
    }

    @Override
    public void updateStatusAndPublish(String uuid) {
        AdvertisementEntity ad = this.advertisementService.updateStatusAndPublish(uuid);
        this.kafkaService.publishCreateAdAfterApproved(ad);
    }

    @Override
    public void updateAdvertisementAndPublishToReview(String uuid, UpdateAdDTO dto) {
        AdvertisementEntity ad = this.advertisementService.updateAdvertisementAndChangeStatusToPending(uuid, dto);
        this.kafkaService.publishAdToUpdate(ad);
    }

    @Override
    public void deleteById(String uuid) {
        AdvertisementEntity ad = this.advertisementService.deleteById(uuid);
        this.kafkaService.publishAdUuidToDelete(ad.getUuid());
    }

    private GetAdDTO buildGetResponse(AdvertisementDTO dto, List<GetAdDTO.MoreAd> moreAds) {
        return GetAdDTO.builder().advertisement(dto).moreAdvertisements(moreAds).build();
    }
}
