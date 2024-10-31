package de.sommer.devsphere.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import de.sommer.devsphere.model.Snippet;

public interface SnippetRepository extends JpaRepository<Snippet, Integer>{
    List<Snippet> findByUserId(int userId);
    Snippet findById(int id);
}
