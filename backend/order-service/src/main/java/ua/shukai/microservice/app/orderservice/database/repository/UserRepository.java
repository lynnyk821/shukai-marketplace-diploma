package ua.shukai.microservice.app.orderservice.database.repository;

import org.springframework.data.repository.CrudRepository;
import ua.shukai.microservice.app.orderservice.database.entity.UserEntity;

public interface UserRepository extends CrudRepository<UserEntity, Long> { }
