package ua.shukai.microservice.app.searchservice.kafka;

import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class KafkaConsumer {

    @KafkaListener(topics = "catalogue-events", groupId = "search-group")
    public void listen(ConsumerRecord<String, String> record) {
        log.info(record.value());
    }
}
