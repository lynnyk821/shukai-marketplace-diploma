package ua.shukai.microservice.app.userservice.controller.user.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDTO {
    private Long id;
    private String image;
}
