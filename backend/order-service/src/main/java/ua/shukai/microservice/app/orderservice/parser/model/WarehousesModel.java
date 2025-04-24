package ua.shukai.microservice.app.orderservice.parser.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter @Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class WarehousesModel {

    @JsonProperty("Description")
    private String warehouse;

    @JsonProperty("Schedule")
    private Map<String, String> schedule;
}