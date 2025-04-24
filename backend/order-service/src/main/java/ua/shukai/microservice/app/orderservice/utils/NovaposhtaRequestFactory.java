package ua.shukai.microservice.app.orderservice.utils;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

@Component
@RequiredArgsConstructor
public class NovaposhtaRequestFactory {
    @Value("${novaposhta.api.key}")
    private String apiKey;

    /**
     * Генерує рядок JSON запиту для отримання складів за посиланням на місто.
     *
     * @param cityRef ідентифікатор посилання на місто, для якого потрібно отримати склади.
     * @return рядок у форматі JSON, що містить запит для API Novaposhta.
     */
    public String getWarehousesByCityRef(String cityRef) {
        return String.format("""
                {
                   "apiKey": "%s",
                   "modelName": "AddressGeneral",
                   "calledMethod": "getWarehouses",
                   "methodProperties": {
                        "FindByString" : "",
                        "CityName" : "",
                        "CityRef" : "%s",
                        "Page" : "1",
                        "Limit" : "",
                        "Language" : "UA",
                        "TypeOfWarehouseRef" : "",
                        "WarehouseId" : ""
                   }
                }
                """, this.apiKey, cityRef);
    }
}
