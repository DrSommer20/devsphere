package de.sommer.devsphere.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import de.sommer.devsphere.model.User;
import de.sommer.devsphere.service.api.UserService;

@Service
public class UserServiceImpl implements UserService {

    List<User> userList = new ArrayList<>();
    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public User registerUser(User user) {
        user.setId(userList.size());
        userList.add(user);
        return user;
    }

    @Override
    public User getUser(int id) {
        return userList.stream().filter(user -> user.getId() == id).findFirst().orElse(null);
    }

    @Override
    public boolean deleteUser(int id) {
        return userList.removeIf(user -> user.getId() == id);
    }

    @Override
    public boolean updateUser(User user) {
        for (User u : userList) {
            if (u.getId() == user.getId()) {
                u.setUsername(user.getUsername());
                u.setPassword(user.getPassword());
                return true;
            }
        }
        return false;
    }

    @Override
    public User getUserByUsername(String username) {
        return userList.stream().filter(user -> user.getUsername().equals(username)).findFirst().orElse(null);
    }

    @Override
    public boolean isPassword(User user, String password) {
        return passwordEncoder.matches(password, user.getPassword());
    }

    @Override
    public String encodePassword(String password) {
        return passwordEncoder.encode(password);
    }
    
}
