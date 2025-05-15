package ua.shukai.microservice.app.orderservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ua.shukai.microservice.app.orderservice.controller.order.dto.request.CreateOrderRequest;
import ua.shukai.microservice.app.orderservice.controller.order.dto.request.UpdateOrderRequest;
import ua.shukai.microservice.app.orderservice.controller.order.dto.response.OrderDTO;
import ua.shukai.microservice.app.orderservice.controller.order.dto.response.PurchasesResponse;
import ua.shukai.microservice.app.orderservice.controller.order.dto.response.SalesResponse;
import ua.shukai.microservice.app.orderservice.database.entity.AdEntity;
import ua.shukai.microservice.app.orderservice.database.entity.OrderEntity;
import ua.shukai.microservice.app.orderservice.database.entity.UserEntity;
import ua.shukai.microservice.app.orderservice.database.repository.AdRepository;
import ua.shukai.microservice.app.orderservice.database.repository.OrderRepository;
import ua.shukai.microservice.app.orderservice.exception.custom.EntityNotFoundException;
import ua.shukai.microservice.app.orderservice.mapper.EntityMapper;
import ua.shukai.microservice.app.orderservice.service.OrderService;
import ua.shukai.microservice.app.orderservice.service.UserService;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderServiceImpl implements OrderService {
    private final UserService userService;
    private final AdRepository adRepository;
    private final EntityMapper entityMapper;
    private final OrderRepository orderRepository;

    @Override
    @Transactional(readOnly = true)
    public OrderDTO getById(String id) {
        return null;
    }

    @Override
    @Transactional(readOnly = true)
    public PurchasesResponse getPurchasesByUserId(Long id, Pageable pageable) {
        Page<OrderEntity> orderEntities = this.orderRepository.getOrdersByCustomerId(id, pageable);
        List<OrderDTO> purchases = orderEntities.map(this.entityMapper::entityToOrderDTO).toList();
        return new PurchasesResponse(purchases, orderEntities.getTotalPages());
    }

    @Override
    @Transactional(readOnly = true)
    public SalesResponse getSalesByUserId(Long id, Pageable pageable) {
        Page<OrderEntity> orderEntities = this.orderRepository.getOrdersBySellerId(id, pageable);
        List<OrderDTO> sales = orderEntities.map(this.entityMapper::entityToOrderDTO).toList();
        return new SalesResponse(sales, orderEntities.getTotalPages());
    }

    @Override
    public void create(CreateOrderRequest request) {
        AdEntity adEntity = this.createAdvertisement(request.getAdvertisement());
        UserEntity seller = this.userService.findByIdOrThrow(request.getSeller().getId());
        UserEntity customer = this.userService.findAndUpdateCustomer(request.getCustomer());

        OrderEntity orderEntity = this.entityMapper.requestToOrderEntity(request, seller, customer, adEntity);
        this.orderRepository.save(orderEntity);
    }

    @Override
    public void updateById(String id, UpdateOrderRequest request) {

    }

    @Override
    public void deleteById(String id) {
        OrderEntity orderEntity = this.findByIdOrThrow(id);
        this.orderRepository.delete(orderEntity);
    }

    private OrderEntity findByIdOrThrow(String id) {
        return this.orderRepository.findById(id).orElseThrow(
            () -> new EntityNotFoundException("Order with id " + id + " not found")
        );
    }

    private AdEntity createAdvertisement(CreateOrderRequest.Advertisement advertisement) {
        return this.adRepository.save(AdEntity.builder()
                .id(advertisement.getId())
                .title(advertisement.getTitle())
                .price(advertisement.getPrice())
                .image(advertisement.getImage())
            .build()
        );
    }
}
