package de.sommer.devsphere.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import de.sommer.devsphere.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Integer> {
}
