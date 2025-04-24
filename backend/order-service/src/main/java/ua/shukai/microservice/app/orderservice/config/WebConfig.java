package ua.shukai.microservice.app.orderservice.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebConfig {
    @Value("${novaposhta.api.url}")
    private String novaposhtaApiUrl;

    @Value("${webclient.codecs.max-response-size}")
    private String maxResponseSize;

    @Bean
    public WebClient webClient() {
        return WebClient.builder()
                .baseUrl(this.novaposhtaApiUrl)
                .exchangeStrategies(ExchangeStrategies.builder()
                        .codecs(configurer -> {
                            String maxResponseSize = this.maxResponseSize.toLowerCase().replace("mb", "");
                            int maxInMemorySize = Integer.parseInt(maxResponseSize) * 1024 * 1024;
                            configurer.defaultCodecs().maxInMemorySize(maxInMemorySize);
                        })
                .build())
        .build();
    }
}
