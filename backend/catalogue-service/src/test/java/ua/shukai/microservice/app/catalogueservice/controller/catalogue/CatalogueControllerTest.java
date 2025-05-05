package ua.shukai.microservice.app.catalogueservice.controller.catalogue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.CreateAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.GetAdDTO;
import ua.shukai.microservice.app.catalogueservice.controller.catalogue.dto.UpdateAdDTO;
import ua.shukai.microservice.app.catalogueservice.service.CatalogueService;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class CatalogueControllerTest {

    @Mock
    private CatalogueService catalogueService;

    @InjectMocks
    private CatalogueController catalogueController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAdvertisementById() {
        String uuid = "uuid-1";
        GetAdDTO dto = new GetAdDTO();
        when(catalogueService.findByIdAdvertisementWithStatusApproved(uuid)).thenReturn(dto);

        ResponseEntity<GetAdDTO> response = catalogueController.getAdvertisementById(uuid);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(dto, response.getBody());
        verify(catalogueService).findByIdAdvertisementWithStatusApproved(uuid);
    }

    @Test
    void testCreateNewAdvertisement() {
        CreateAdDTO dto = new CreateAdDTO();

        ResponseEntity<CreateAdDTO> response = catalogueController.saveBeforeApprovalWithPendingStatus(dto);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(dto, response.getBody());
        verify(catalogueService).saveAdWithPendingStatusAndPublishItForReview(dto);
    }

    @Test
    void testUpdateAdvertisementById() {
        String uuid = "uuid-1";
        UpdateAdDTO dto = new UpdateAdDTO();

        ResponseEntity<Void> response = catalogueController.updateAdvertisementById(uuid, dto);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        verify(catalogueService).updateAdvertisementAndPublishToReview(uuid, dto);
    }

    @Test
    void testDeleteAdvertisementById() {
        String id = "1L";

        ResponseEntity<Void> response = catalogueController.deleteAdvertisementById(id);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        verify(catalogueService).deleteById(id);
    }
}