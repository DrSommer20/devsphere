package de.sommer.devsphere.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.OneToMany;
import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String description;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "project_id")
    private List<KanbanItem> kanban;
    
    private String dueAt;
    private String createdAt;
    private String status;

    public Project(){}

    public Project(int id, String title, String description, List<KanbanItem> kanban, String dueAt,
            String createdAt, String status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.kanban = kanban;
        this.dueAt = dueAt;
        this.createdAt = createdAt;
        this.status = status;
    }

    public Project(String title, String description, List<KanbanItem> kanban, String dueAt, String createdAt,
            String status) {
        this.title = title;
        this.description = description;
        this.kanban = kanban;
        this.dueAt = dueAt;
        this.createdAt = createdAt;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<KanbanItem> getKanban() {
        return kanban;
    }

    public void setKanban(List<KanbanItem> kanban) {
        this.kanban = kanban;
    }   

    public String getDueAt() {
        return dueAt;
    }

    public void setDueAt(String dueAt) {
        this.dueAt = dueAt;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((title == null) ? 0 : title.hashCode());
        result = prime * result + ((description == null) ? 0 : description.hashCode());
        result = prime * result + ((kanban == null) ? 0 : kanban.hashCode());
        result = prime * result + ((dueAt == null) ? 0 : dueAt.hashCode());
        result = prime * result + ((createdAt == null) ? 0 : createdAt.hashCode());
        result = prime * result + ((status == null) ? 0 : status.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Project other = (Project) obj;
        if (id != other.id)
            return false;
        if (title == null) {
            if (other.title != null)
                return false;
        } else if (!title.equals(other.title))
            return false;
        if (description == null) {
            if (other.description != null)
                return false;
        } else if (!description.equals(other.description))
            return false;
        if (kanban == null) {
            if (other.kanban != null)
                return false;
        } else if (!kanban.equals(other.kanban))
            return false;
        if (dueAt == null) {
            if (other.dueAt != null)
                return false;
        } else if (!dueAt.equals(other.dueAt))
            return false;
        if (createdAt == null) {
            if (other.createdAt != null)
                return false;
        } else if (!createdAt.equals(other.createdAt))
            return false;
        if (status == null) {
            if (other.status != null)
                return false;
        } else if (!status.equals(other.status))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Project [id=" + id + ", title=" + title + ", description=" + description + ", kanban=" + kanban
                + ", dueAt=" + dueAt + ", createdAt=" + createdAt + ", status=" + status + "]";
    }
}
