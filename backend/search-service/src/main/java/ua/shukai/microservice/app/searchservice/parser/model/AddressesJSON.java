package ua.shukai.microservice.app.searchservice.parser.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class AddressesJSON {

    @JsonProperty("Addresses")
    private List<AddressJSON> addresses;
}
