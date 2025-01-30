package ua.shukai.microservice.app.searchservice.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "catalogue-service")
public interface CatalogueClient {

    @GetMapping("/api/catalogue/info")
    String getCatalogue();
}
