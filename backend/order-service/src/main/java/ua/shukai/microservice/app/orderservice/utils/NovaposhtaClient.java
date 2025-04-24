package ua.shukai.microservice.app.orderservice.utils;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

@Component
@RequiredArgsConstructor
public class NovaposhtaClient {
    private final WebClient webClient;

    /**
     * Відправляє POST-запит до API Novaposhta.
     *
     * @param request JSON-рядок, що містить запит.
     * @return Відповідь від API у форматі рядка.
     */
    public String sendPostRequest(String request) {
        return webClient.post()
                .uri("https://api.novaposhta.ua/v2.0/json/") // Укажите правильный URL
                .bodyValue(request)
                .retrieve()
                .bodyToMono(String.class)
        .block();
    }
}