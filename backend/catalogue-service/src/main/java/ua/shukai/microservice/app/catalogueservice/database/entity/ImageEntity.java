package ua.shukai.microservice.app.catalogueservice.database.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="images")
@Builder
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String base64Image;
}
