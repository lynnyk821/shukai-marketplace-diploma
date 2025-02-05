package ua.shukai.microservice.app.catalogueservice.mapper;

import ua.shukai.microservice.app.catalogueservice.database.entity.AdPaymentMethodEntity;
import ua.shukai.microservice.app.catalogueservice.database.entity.PaymentMethodEntity;

import java.util.List;

public interface PaymentMethodMapper {

    AdPaymentMethodEntity map(PaymentMethodEntity paymentMethodEntity);

    List<AdPaymentMethodEntity> map(List<PaymentMethodEntity> paymentMethodEntities);

    List<String> toStringList(List<AdPaymentMethodEntity> adPaymentMethodEntities);
}
