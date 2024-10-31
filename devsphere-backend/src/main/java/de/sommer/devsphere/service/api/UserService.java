package de.sommer.devsphere.service.api;

import de.sommer.devsphere.model.User;

public interface UserService {
    public User registerUser(User user);
    public User getUser(int id);
    public boolean deleteUser(int id);
    public boolean updateUser(User user);
    public User getUserByUsername(String username);    
    public boolean isPassword(User user, String password);
    public String encodePassword(String password);
}
