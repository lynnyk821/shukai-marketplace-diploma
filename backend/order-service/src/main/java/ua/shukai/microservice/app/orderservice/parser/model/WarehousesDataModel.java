package ua.shukai.microservice.app.orderservice.parser.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class WarehousesDataModel {

    @JsonProperty("data")
    private List<WarehousesModel> data;
}
