package ua.shukai.microservice.app.catalogueservice.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ua.shukai.microservice.app.catalogueservice.kafka.KafkaProducer;

@RestController
@RequestMapping("/catalogue")
@RequiredArgsConstructor
public class CatalogueController {
    private final KafkaProducer kafkaProducer;

    @GetMapping("/info")
    public String info() {
        return "Info form catalogue";
    }

    @PostMapping("/new-ad")
    public String publishMessage(@RequestParam String message) {
        this.kafkaProducer.send("new-ad", message);
        return "Сообщение отправлено в Kafka: " + message;
    }

    @PatchMapping("/patch")
    public String patch() {
        return "Patch";
    }

    @DeleteMapping("/delete")
    public String delete() {
        return "Delete";
    }
}
