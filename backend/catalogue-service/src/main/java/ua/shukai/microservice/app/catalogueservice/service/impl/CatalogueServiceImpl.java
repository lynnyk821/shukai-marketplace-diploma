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

    @Override
    @Transactional(readOnly = true)
    public GetAdDTO findById(Long id) {
        AdvertisementEntity advertisement = this.advertisementService.findByIdOrThrow(id);
        AdvertisementDTO advertisementDTO = this.advertisementMapper.mapToAdDTO(advertisement);

        List<AdvertisementEntity> moreAds = this.advertisementService.findMoreById(advertisement.getUser().getId());
        List<GetAdDTO.MoreAd> moreAdvertisementDTOs = this.advertisementMapper.mapToMoreAds(moreAds);

        return buildGetResponse(advertisementDTO, moreAdvertisementDTOs);
    }

    @Override
    public void create(CreateAdDTO dto) {
        AdvertisementEntity ad = this.advertisementService.create(dto);
        this.kafkaService.sendKafkaCreateAd(ad);
    }

    @Override
    public void update(Long id, UpdateAdDTO dto) {
        AdvertisementEntity ad = this.advertisementService.update(id, dto);
        this.kafkaService.sendKafkaUpdateAd(ad);
    }

    @Override
    public void deleteById(Long id) {
        AdvertisementEntity ad = this.advertisementService.deleteById(id);
        this.kafkaService.sendKafkaDeleteAd(ad);
    }

    private GetAdDTO buildGetResponse(AdvertisementDTO dto, List<GetAdDTO.MoreAd> moreAds) {
        return GetAdDTO.builder().advertisement(dto).moreAdvertisements(moreAds).build();
    }
}
