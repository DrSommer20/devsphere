package de.sommer.devsphere.controller.graphql;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import de.sommer.devsphere.model.Project;
import de.sommer.devsphere.model.KanbanInput;
import de.sommer.devsphere.model.KanbanItem;
import de.sommer.devsphere.service.api.ProjectService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Controller
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @MutationMapping
    public Project createProject(@Argument String title, @Argument String description, 
                                 @Argument List<KanbanInput> kanban, @Argument String dueAt) {
        Project project = new Project(title, description, null, dueAt, LocalDateTime.now().toString(), "ACTIVE");
        List<KanbanItem> kanbanItems = kanban.stream()
            .map(input -> new KanbanItem(input.getTitle(), input.getState(), project))
            .collect(Collectors.toList());
        project.setKanban(kanbanItems);
        return projectService.createProject(project);
    }

    @MutationMapping
    public Project updateProject(@Argument int id, @Argument String title, @Argument String description, 
                                 @Argument List<KanbanInput> kanban, @Argument String dueAt) {
        Project project = projectService.getProjectById(id);
        if (title != null && !title.isBlank()) {
            project.setTitle(title);
        }
        if (description != null && !description.isBlank()) {
            project.setDescription(description);
        }
        if (kanban != null && !kanban.isEmpty()) {
            List<KanbanItem> kanbanItems = kanban.stream()
                .map(input -> new KanbanItem(input.getId(), input.getTitle(), input.getState(), project))
                .collect(Collectors.toList());
            project.setKanban(kanbanItems);
        }
        if (dueAt != null && !dueAt.isBlank()) {
            project.setDueAt(dueAt);
        }
        return projectService.updateProject(project);
    }

    @MutationMapping
    public Boolean deleteProject(@Argument int id) {
        return projectService.deleteProject(id);
    }

    @QueryMapping
    public List<Project> allProjects() {
        return projectService.getAllProjects();
    }

    @QueryMapping
    public Project projectById(@Argument int id) {
        return projectService.getProjectById(id);
    }
}