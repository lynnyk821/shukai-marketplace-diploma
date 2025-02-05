package ua.shukai.microservice.app.catalogueservice.service;

import org.springframework.data.domain.Pageable;
import ua.shukai.microservice.app.catalogueservice.controller.home.dto.GetHomeAdsDTO;

import java.util.List;

public interface HomeService {

    List<GetHomeAdsDTO.AdHome> findAll(Pageable pageable);

    GetHomeAdsDTO getHomeAdvertisements();

    List<GetHomeAdsDTO.AdHome> getAdsByCategoryName(String categoryName, Pageable pageable);
}
