package ua.shukai.microservice.app.userservice.controller.admin.dto;

import java.util.List;

public record ReviewAdvertisementResponse(List<ReviewAdvertisementDTO> advertisements, int totalPages) { }
