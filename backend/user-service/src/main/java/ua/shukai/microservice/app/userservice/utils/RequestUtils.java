package ua.shukai.microservice.app.userservice.utils;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;

@Component
public class RequestUtils {

    public static String getTokenFromRequest(HttpServletRequest request) {
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        return getTokenFromStringHeader(authorizationHeader);
    }

    public static String getTokenFromRequest(HttpHeaders headers) {
        String authorizationHeader = headers.getFirst(HttpHeaders.AUTHORIZATION);
        return getTokenFromStringHeader(authorizationHeader);
    }

    private static String getTokenFromStringHeader(String authorizationHeader) {
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")){
            return authorizationHeader.substring("Bearer ".length());
        }
        return null;
    }
}
