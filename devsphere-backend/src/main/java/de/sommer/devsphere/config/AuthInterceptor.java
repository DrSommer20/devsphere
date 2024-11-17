package de.sommer.devsphere.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import de.sommer.devsphere.model.User;
import de.sommer.devsphere.service.api.AuthService;
import de.sommer.devsphere.service.api.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class AuthInterceptor implements HandlerInterceptor {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    private static final ThreadLocal<User> authenticatedUser = new ThreadLocal<>();

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token = request.getHeader("Authorization");  
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            String email = authService.extractEmail(token);
            User user = userService.getUserByEmail(email);
            authenticatedUser.set(user);
        }
        return true;
    }

    public static User getAuthenticatedUser() {
        return authenticatedUser.get();
    }

    public static void clear() {
        authenticatedUser.remove();
    }
}