package de.sommer.devsphere.service.api;

import de.sommer.devsphere.model.User;

public interface UserService {
    User registerUser(User user);
    User getUserById(int id);
    boolean deleteUser(int id);
    boolean updateUser(User user);
    User getUserByUsername(String username);
    User getUserByEmail(String email);
    boolean isPassword(User user, String password);
}