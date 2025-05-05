package ua.shukai.microservice.app.searchservice.service.impl;

import co.elastic.clients.elasticsearch._types.query_dsl.BoolQuery;
import co.elastic.clients.elasticsearch._types.query_dsl.Query;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.client.elc.NativeQuery;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.stereotype.Service;
import ua.shukai.microservice.app.searchservice.consumer.dto.KafkaAdvertisementDTO;
import ua.shukai.microservice.app.searchservice.controller.dto.SearchAdvertisementDTO;
import ua.shukai.microservice.app.searchservice.elasticsearch.model.Advertisement;
import ua.shukai.microservice.app.searchservice.elasticsearch.repository.AdvertisementRepository;
import ua.shukai.microservice.app.searchservice.mapper.AdvertisementMapper;
import ua.shukai.microservice.app.searchservice.service.SearchService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SearchServiceImpl implements SearchService {
    private final AdvertisementMapper advertisementMapper;
    private final ElasticsearchOperations elasticsearchOperations;
    private final AdvertisementRepository advertisementRepository;

    @Override
    public void create(KafkaAdvertisementDTO dto) {
        Advertisement advertisementDocument = this.advertisementMapper.map(dto);
        this.advertisementRepository.save(advertisementDocument);
    }

    @Override
    public List<SearchAdvertisementDTO> findAll(String value, String category,
                                                Integer priceFrom, Integer priceTo, Pageable pageable) {
        BoolQuery.Builder boolQueryBuilder = new BoolQuery.Builder();

        if(value != null) {
            BoolQuery.Builder termsQueryBuilder = getBuilder(value);

            boolQueryBuilder.must(termsQueryBuilder.build()._toQuery());
        }

        if(category != null) {
            boolQueryBuilder.filter(f -> f
                .term(t -> t.field("categoryName.keyword")
                    .value(category)
                )
            );
        }

        if (priceFrom != null || priceTo != null) {
            boolQueryBuilder.filter(f -> f.range(r -> r.number(n -> n.field("price")
                .lte(priceTo != null ? priceTo.doubleValue() : null)
                .gte(priceFrom != null ? priceFrom.doubleValue() : null
            ))));
        }

        Query query = Query.of(q -> q.bool(boolQueryBuilder.build()));

        NativeQuery nativeQuery = NativeQuery.builder()
            .withQuery(query)
            .withPageable(pageable)
        .build();

        SearchHits<Advertisement> searchHits = this.elasticsearchOperations.search(nativeQuery, Advertisement.class);

        return searchHits.getSearchHits().stream().map(hit -> this.advertisementMapper.map(hit.getContent())).toList();
    }

    private static BoolQuery.Builder getBuilder(String searchValue) {
        String[] terms = searchValue.split("\\s+");
        BoolQuery.Builder termsQueryBuilder = new BoolQuery.Builder();

        for (String term : terms) {
            String fuzziness = term.length() > 3 ? "1" : "0";

            termsQueryBuilder.must(s -> s
                    .multiMatch(mm -> mm
                            .query(term)
                            .fields("name")
                            .fuzziness(fuzziness)
                            .prefixLength(2)
                            .maxExpansions(10)
                    )
            );
        }
        return termsQueryBuilder;
    }
}
