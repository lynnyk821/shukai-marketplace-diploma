package ua.shukai.microservice.app.catalogueservice.mapper.impl;

import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.catalogueservice.database.entity.AdPaymentMethodEntity;
import ua.shukai.microservice.app.catalogueservice.database.entity.PaymentMethodEntity;
import ua.shukai.microservice.app.catalogueservice.mapper.PaymentMethodMapper;

import java.util.List;

@Component
public class PaymentMethodMapperImpl implements PaymentMethodMapper {

    @Override
    public AdPaymentMethodEntity map(PaymentMethodEntity paymentMethodEntity) {
        return AdPaymentMethodEntity.builder().paymentMethod(paymentMethodEntity).build();
    }

    @Override
    public List<AdPaymentMethodEntity> map(List<PaymentMethodEntity> m) {
        return m.stream().map(this::map).toList();
    }

    @Override
    public List<String> toStringList(List<AdPaymentMethodEntity> adPaymentMethodEntities) {
        return adPaymentMethodEntities.stream().map(
                pm -> pm.getPaymentMethod().getMethod()
        ).toList();
    }
}
