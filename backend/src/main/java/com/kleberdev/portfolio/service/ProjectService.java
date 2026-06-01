package com.kleberdev.portfolio.service;

import com.kleberdev.portfolio.dto.ProjectDTO;
import com.kleberdev.portfolio.entity.Project;
import com.kleberdev.portfolio.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ProjectService {
    
    private final ProjectRepository projectRepository;
    
    public List<ProjectDTO> getAllProjects() {
        return projectRepository.findAll().stream()
            .map(this::toDTO)
            .collect(Collectors.toList());
    }
    
    public ProjectDTO getProjectById(Long id) {
        return projectRepository.findById(id)
            .map(this::toDTO)
            .orElseThrow(() -> new RuntimeException("Project not found"));
    }
    
    public ProjectDTO createProject(ProjectDTO projectDTO) {
        Project project = Project.builder()
            .title(projectDTO.getTitle())
            .description(projectDTO.getDescription())
            .url(projectDTO.getUrl())
            .githubUrl(projectDTO.getGithubUrl())
            .technologies(projectDTO.getTechnologies())
            .imageUrl(projectDTO.getImageUrl())
            .build();
        
        Project saved = projectRepository.save(project);
        return toDTO(saved);
    }
    
    public ProjectDTO updateProject(Long id, ProjectDTO projectDTO) {
        Project project = projectRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Project not found"));
        
        project.setTitle(projectDTO.getTitle());
        project.setDescription(projectDTO.getDescription());
        project.setUrl(projectDTO.getUrl());
        project.setGithubUrl(projectDTO.getGithubUrl());
        project.setTechnologies(projectDTO.getTechnologies());
        project.setImageUrl(projectDTO.getImageUrl());
        project.setUpdatedAt(LocalDateTime.now());
        
        Project saved = projectRepository.save(project);
        return toDTO(saved);
    }
    
    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
    
    private ProjectDTO toDTO(Project project) {
        return ProjectDTO.builder()
            .id(project.getId())
            .title(project.getTitle())
            .description(project.getDescription())
            .url(project.getUrl())
            .githubUrl(project.getGithubUrl())
            .technologies(project.getTechnologies())
            .imageUrl(project.getImageUrl())
            .build();
    }
}
