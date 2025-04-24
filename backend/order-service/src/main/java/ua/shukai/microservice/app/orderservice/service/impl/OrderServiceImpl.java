package ua.shukai.microservice.app.orderservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ua.shukai.microservice.app.orderservice.controller.order.dto.AdDTO;
import ua.shukai.microservice.app.orderservice.controller.order.dto.request.CreateOrderRequest;
import ua.shukai.microservice.app.orderservice.controller.order.dto.request.UpdateOrderRequest;
import ua.shukai.microservice.app.orderservice.controller.order.dto.OrderDTO;
import ua.shukai.microservice.app.orderservice.database.entity.AdEntity;
import ua.shukai.microservice.app.orderservice.database.entity.OrderEntity;
import ua.shukai.microservice.app.orderservice.database.entity.UserEntity;
import ua.shukai.microservice.app.orderservice.database.repository.AdRepository;
import ua.shukai.microservice.app.orderservice.database.repository.OrderRepository;
import ua.shukai.microservice.app.orderservice.database.repository.UserRepository;
import ua.shukai.microservice.app.orderservice.exception.custom.EntityNotFoundException;
import ua.shukai.microservice.app.orderservice.mapper.EntityMapper;
import ua.shukai.microservice.app.orderservice.service.OrderService;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final AdRepository adRepository;
    private final EntityMapper entityMapper;
    private final UserRepository userRepository;
    private final OrderRepository orderRepository;

    @Override
    public OrderDTO getById(Long id) {
        OrderEntity orderEntity = this.findByIdOrThrow(id);
        AdDTO adDTO = this.entityMapper.entityToAdDTO(orderEntity.getAd());
        return new OrderDTO(orderEntity.getId(), adDTO);
    }

    @Override
    public void create(CreateOrderRequest request) {
        AdEntity adEntity = this.findAdOrThrow(request.getAdId());
        UserEntity userEntity = this.findUserOrThrow(request.getUserId());

        this.orderRepository.save(OrderEntity.builder()
                        .ad(adEntity)
                        .user(userEntity)
                        .warehouse(request.getWarehouse())
                        .paymentMethod(request.getPaymentMethod())
                        .deliveryMethod(request.getDeliveryMethod())
                .build());
    }

    @Override
    public void updateById(Long id, UpdateOrderRequest request) {

    }

    @Override
    public void deleteById(Long id) {
        OrderEntity orderEntity = this.findByIdOrThrow(id);
        this.orderRepository.delete(orderEntity);
    }

    private OrderEntity findByIdOrThrow(Long id) {
        return this.orderRepository.findById(id).orElseThrow(
            () -> new EntityNotFoundException("Order with id " + id + " not found")
        );
    }

    private UserEntity findUserOrThrow(Long userId) {
        return this.userRepository.findById(userId).orElseThrow(
            () -> new EntityNotFoundException("User not found with id " + userId)
        );
    }

    private AdEntity findAdOrThrow(Long adId) {
        return this.adRepository.findById(adId).orElseThrow(
            () -> new EntityNotFoundException("Ad not found with id " + adId)
        );
    }
}
