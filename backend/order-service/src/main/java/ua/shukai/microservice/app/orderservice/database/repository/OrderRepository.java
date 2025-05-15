package ua.shukai.microservice.app.orderservice.database.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import ua.shukai.microservice.app.orderservice.database.entity.OrderEntity;

public interface OrderRepository extends JpaRepository<OrderEntity, String> {

    Page<OrderEntity> getOrdersByCustomerId(Long customerId, Pageable pageable);

    Page<OrderEntity> getOrdersBySellerId(Long sellerId, Pageable pageable);
}
