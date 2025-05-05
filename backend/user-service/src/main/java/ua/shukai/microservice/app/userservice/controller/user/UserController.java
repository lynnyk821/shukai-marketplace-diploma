package ua.shukai.microservice.app.userservice.controller.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.shukai.microservice.app.userservice.controller.user.dto.MeDTO;
import ua.shukai.microservice.app.userservice.service.UserService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @GetMapping("/me")
    public ResponseEntity<MeDTO> getMeByJwt(@RequestHeader HttpHeaders headers) {
        MeDTO body = this.userService.getMeDTO(headers);
        return ResponseEntity.ok(body);
    }

    @GetMapping("/profile/{id}")
    public ResponseEntity<?> getUserProfile(@PathVariable("id") Long userId) {
        return ResponseEntity.ok(null);
    }

    @PatchMapping
    public ResponseEntity<Void> updateUser(@RequestBody Object request) {
        return ResponseEntity.noContent().build();
    }
}
