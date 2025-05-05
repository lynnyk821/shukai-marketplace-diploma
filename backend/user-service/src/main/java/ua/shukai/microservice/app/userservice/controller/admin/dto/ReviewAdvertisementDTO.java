package ua.shukai.microservice.app.userservice.controller.admin.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter @Setter
public class ReviewAdvertisementDTO {
    private String uuid;
    private String title;
    private String description;
    private List<String> images;
    private String userEmail;
    private String status;
}
