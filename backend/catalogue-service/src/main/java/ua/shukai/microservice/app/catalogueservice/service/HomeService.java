package ua.shukai.microservice.app.catalogueservice.service;

import ua.shukai.microservice.app.catalogueservice.controller.home.dto.GetHomeAdsDTO;

public interface HomeService {
    GetHomeAdsDTO getHomeAdvertisements();
}
