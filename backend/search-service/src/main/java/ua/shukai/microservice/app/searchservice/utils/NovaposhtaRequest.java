package ua.shukai.microservice.app.searchservice.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class NovaposhtaRequest {

    @Value("${novaposhta.api.key}")
    private String apiKey;  // Ключ API для аутентифікації з API Novaposhta

    /**
     * Генерує рядок JSON запиту для пошуку міст за частковою назвою.
     *
     * @param city часткова назва міста для пошуку.
     * @return рядок у форматі JSON, що містить запит для API Novaposhta.
     */
    public String getCitiesByPartName(String city) {
        return String.format("""
                {
                   "apiKey": "%s",
                   "modelName": "AddressGeneral",
                   "calledMethod": "searchSettlements",
                   "methodProperties": {
                        "CityName" : "%s",
                        "Limit" : "50",
                        "Page" : "1"
                   }
                }
                """, this.apiKey, city);
    }

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
