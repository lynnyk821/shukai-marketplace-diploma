package ua.shukai.microservice.app.searchservice.consumer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
import ua.shukai.microservice.app.searchservice.consumer.dto.KafkaAdvertisementDTO;
import ua.shukai.microservice.app.searchservice.service.SearchService;

@Slf4j
@Service
@RequiredArgsConstructor
public class KafkaAdvertisementConsumer {
    private final SearchService searchService;

    @KafkaListener(topics = "review-approved-advertisement", groupId = "search-group")
    public void listen(ConsumerRecord<String, KafkaAdvertisementDTO> kafkaDTO) {
        log.info("Received created_advertisement");
        this.searchService.create(kafkaDTO.value());
    }
}
