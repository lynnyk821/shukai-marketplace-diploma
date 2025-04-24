package ua.shukai.microservice.app.orderservice.database.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.shukai.microservice.app.orderservice.database.entity.OrderEntity;

public interface OrderRepository extends JpaRepository<OrderEntity, Long> {

}
