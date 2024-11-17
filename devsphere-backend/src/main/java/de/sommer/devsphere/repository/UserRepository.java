package de.sommer.devsphere.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import de.sommer.devsphere.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);
    User findByEmail(String email);
}