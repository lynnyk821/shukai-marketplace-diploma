package ua.shukai.microservice.app.userservice.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class PasswordEncoderHolder {
    private static PasswordEncoder encoder;

    @Autowired
    public PasswordEncoderHolder(PasswordEncoder encoder) {
        PasswordEncoderHolder.encoder = encoder;
    }

    public static String encode(String rawPassword) {
        return encoder.encode(rawPassword);
    }
}
