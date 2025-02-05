package ua.shukai.microservice.app.searchservice.elasticsearch.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.sql.Timestamp;

@Data
@Builder
@Document(indexName = "advertisements")
public class Advertisement {
    @Id
    private Long id;
    private String name;
    private String image;
    private Integer price;
    private Long createdAt;
    private String categoryName;
}
