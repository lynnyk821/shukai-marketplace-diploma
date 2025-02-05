package ua.shukai.microservice.app.catalogueservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.GetAdvertisementDTO;
import ua.shukai.microservice.app.catalogueservice.controller.home.dto.GetHomeAdsDTO;
import ua.shukai.microservice.app.catalogueservice.database.entity.AdvertisementEntity;
import ua.shukai.microservice.app.catalogueservice.database.repository.AdvertisementRepository;
import ua.shukai.microservice.app.catalogueservice.mapper.HomeMapper;
import ua.shukai.microservice.app.catalogueservice.service.HomeService;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class HomeServiceImpl implements HomeService {
    private final HomeMapper homeMapper;
    private final AdvertisementRepository advertisementRepository;

    @Value("${home.advertisements.clothes.categoryName}")
    private String clothesCategoryName;

    @Value("${home.advertisements.autoGoods.categoryName}")
    private String autoGoodsCategoryName;

    @Value("${home.advertisements.electronics.categoryName}")
    private String electronicsCategoryName;

    @Override
    public List<GetHomeAdsDTO.AdHome> findAll(Pageable pageable) {
        return this.advertisementRepository.findAll(pageable).map(this.homeMapper::map).toList();
    }

    @Override
    public GetHomeAdsDTO getHomeAdvertisements() {
        PageRequest pageRequest = PageRequest.of(0, 10, Sort.by(Sort.Direction.DESC, "createdAt"));

        return GetHomeAdsDTO.builder()
                .newAdvertisements(findAll(pageRequest))
                .clothesAdvertisements(getAdsByCategoryName(clothesCategoryName, pageRequest))
                .autoGoodAdvertisements(getAdsByCategoryName(autoGoodsCategoryName, pageRequest))
                .electronicAdvertisements(getAdsByCategoryName(electronicsCategoryName, pageRequest))
        .build();
    }

    @Override
    public List<GetHomeAdsDTO.AdHome> getAdsByCategoryName(String categoryName, Pageable pageable) {
        return this.advertisementRepository.findAllByCategory_Name(categoryName, pageable)
                .map(this.homeMapper::map).toList();
    }
}
