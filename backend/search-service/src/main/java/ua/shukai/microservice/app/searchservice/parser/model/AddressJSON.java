package ua.shukai.microservice.app.searchservice.parser.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class AddressJSON {

    @JsonProperty("Present")
    private String present;

    @JsonProperty("DeliveryCity")
    private String ref;

    @JsonProperty("MainDescription")
    private String cityName;

    @JsonProperty("Area")
    private String area;

    public String getArea() {
        return area + " oбл.";
    }
}
