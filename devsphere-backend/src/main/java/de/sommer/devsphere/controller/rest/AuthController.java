package de.sommer.devsphere.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.sommer.devsphere.model.User;
import de.sommer.devsphere.service.api.AuthService;
import de.sommer.devsphere.service.api.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthService authService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userService.getUserByUsername(user.getUsername()) != null) {
            return ResponseEntity.status(400).body("Username already exists");
        }
        if (userService.getUserByEmail(user.getEmail()) != null) {
            return ResponseEntity.status(400).body("Email already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userService.registerUser(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User loginUser) {
        User existingUser = userService.getUserByUsername(loginUser.getUsername());
        if (existingUser != null && passwordEncoder.matches(loginUser.getPassword(), existingUser.getPassword())) {
            return ResponseEntity.ok(authService.generateToken(existingUser));
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}