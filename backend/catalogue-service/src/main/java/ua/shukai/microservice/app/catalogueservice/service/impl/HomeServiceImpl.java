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

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class HomeServiceImpl implements HomeService {
    private final AdvertisementMapper advertisementMapper;
    private final AdvertisementRepository advertisementRepository;

    @Value("${home.advertisements.clothes.category}")
    private String clothesCategoryName;

    @Value("${home.advertisements.autoGoods.category}")
    private String autoGoodsCategoryName;

    @Value("${home.advertisements.electronics.category}")
    private String electronicsCategoryName;

    @Override
    public GetHomeAdsDTO getHomeAdvertisements() {
        Pageable pageable = PageRequest.of(0, 10, Sort.by(Sort.Direction.DESC, "createdAt"));

        return GetHomeAdsDTO.builder()
                .newAdvertisements(findAll(pageable))
                .clothesAdvertisements(getAdsByCategoryName(clothesCategoryName, pageable))
                .autoGoodAdvertisements(getAdsByCategoryName(autoGoodsCategoryName, pageable))
                .electronicAdvertisements(getAdsByCategoryName(electronicsCategoryName, pageable))
        .build();
    }

    private List<GetHomeAdsDTO.AdHome> findAll(Pageable pageable) {
        return this.advertisementRepository
                .findAll(pageable)
                .map(this.advertisementMapper::mapAdHome)
                .toList();
    }

    private List<GetHomeAdsDTO.AdHome> getAdsByCategoryName(String categoryName, Pageable pageable) {
        return this.advertisementRepository
                .findAllByCategory_Name(categoryName, pageable)
                .map(this.advertisementMapper::mapAdHome)
                .toList();
    }
}
