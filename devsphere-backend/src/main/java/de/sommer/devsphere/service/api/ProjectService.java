package de.sommer.devsphere.service.api;

import de.sommer.devsphere.model.Project;
import java.util.List;

public interface ProjectService {
    Project createProject(Project project);
    Project updateProject(Project project);
    boolean deleteProject(int id);
    Project getProjectById(int id);
    List<Project> getAllProjects();
}
