package ua.shukai.microservice.app.userservice.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ua.shukai.microservice.app.userservice.database.entity.UserEntity;
import ua.shukai.microservice.app.userservice.database.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = this.userRepository.findByUsername(username).orElseThrow(
            () -> new UsernameNotFoundException("User not found with username: " + username)
        );

        return User.builder()
                .username(user.getUsername())
                .password(user.getPassword())
        .build();
    }
}
