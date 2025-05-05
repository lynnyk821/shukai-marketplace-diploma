package ua.shukai.microservice.app.catalogueservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.shukai.microservice.app.catalogueservice.controller.home.dto.GetHomeAdsDTO;
import ua.shukai.microservice.app.catalogueservice.database.repository.AdvertisementRepository;
import ua.shukai.microservice.app.catalogueservice.mapper.AdvertisementMapper;
import ua.shukai.microservice.app.catalogueservice.service.HomeService;
import ua.shukai.microservice.app.catalogueservice.types.AdvertisementStatus;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class HomeServiceImpl implements HomeService {
    private final AdvertisementMapper advertisementMapper;
    private final AdvertisementRepository advertisementRepository;

    @Value("${home.advertisements.categories.first}")
    private String firstCategoryName;

    @Value("${home.advertisements.categories.second}")
    private String secondCategoryName;

    @Value("${home.advertisements.categories.third}")
    private String thirdCategoryName;

    @Override
    public GetHomeAdsDTO getHomeAdvertisements() {
        Pageable pageable = PageRequest.of(0, 10, Sort.by(Sort.Direction.DESC, "createdAt"));

        return GetHomeAdsDTO.builder()
                .newAdvertisements(findAll(pageable))
                .clothesAdvertisements(getAdsByCategoryName(firstCategoryName, pageable))
                .autoGoodAdvertisements(getAdsByCategoryName(secondCategoryName, pageable))
                .electronicAdvertisements(getAdsByCategoryName(thirdCategoryName, pageable))
        .build();
    }

    private List<GetHomeAdsDTO.AdHome> findAll(Pageable pageable) {
        return this.advertisementRepository
                .findAllByStatus(AdvertisementStatus.APPROVED, pageable)
                .map(this.advertisementMapper::mapAdHome)
                .toList();
    }

    private List<GetHomeAdsDTO.AdHome> getAdsByCategoryName(String categoryName, Pageable pageable) {
        return this.advertisementRepository
                .findAllByStatusAndCategory_Name(AdvertisementStatus.APPROVED, categoryName, pageable)
                .map(this.advertisementMapper::mapAdHome)
                .toList();
    }
}
