package ua.shukai.microservice.app.orderservice.mapper;

import org.springframework.stereotype.Component;
import ua.shukai.microservice.app.orderservice.controller.order.dto.request.CreateOrderRequest;
import ua.shukai.microservice.app.orderservice.controller.order.dto.response.OrderDTO;
import ua.shukai.microservice.app.orderservice.database.entity.AdEntity;
import ua.shukai.microservice.app.orderservice.database.entity.OrderEntity;
import ua.shukai.microservice.app.orderservice.database.entity.UserEntity;

@Component
public class EntityMapper {
    public OrderDTO entityToOrderDTO(OrderEntity entity) {
        return OrderDTO.builder()
                .id(entity.getId())
                .title(entity.getAd().getTitle())
                .price(entity.getAd().getPrice())
                .orderDate(entity.getCreatedAt())
                .status(entity.getStatus())
                .image(entity.getAd().getImage())
        .build();
    }

    public OrderEntity requestToOrderEntity(CreateOrderRequest request,
                                            UserEntity seller, UserEntity customer,
                                            AdEntity advertisement
    ) {
        return OrderEntity.builder()
                .ad(advertisement)
                .seller(seller)
                .customer(customer)
                .warehouse(request.getDelivery().getWarehouse())
                .deliveryMethod(request.getDelivery().getService())
                .paymentMethod(request.getPaymentMethod())
        .build();
    }
}
