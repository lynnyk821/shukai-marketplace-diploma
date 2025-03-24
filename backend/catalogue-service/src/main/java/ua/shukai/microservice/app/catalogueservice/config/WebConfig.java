package ua.shukai.microservice.app.catalogueservice.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

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
                            int maxInMemorySize = Integer.parseInt(this.maxResponseSize
                                    .toLowerCase().replace("mb", "")) * 1024 * 1024;
                            configurer.defaultCodecs().maxInMemorySize(maxInMemorySize);
                        }).build()
                ).build();
    }
}
