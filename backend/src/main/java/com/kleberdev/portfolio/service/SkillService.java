package com.kleberdev.portfolio.service;

import com.kleberdev.portfolio.dto.SkillDTO;
import com.kleberdev.portfolio.entity.Skill;
import com.kleberdev.portfolio.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class SkillService {
    
    private final SkillRepository skillRepository;
    
    public List<SkillDTO> getAllSkills() {
        return skillRepository.findAll().stream()
            .map(this::toDTO)
            .collect(Collectors.toList());
    }
    
    public SkillDTO getSkillById(Long id) {
        return skillRepository.findById(id)
            .map(this::toDTO)
            .orElseThrow(() -> new RuntimeException("Skill not found"));
    }
    
    public SkillDTO createSkill(SkillDTO skillDTO) {
        Skill skill = Skill.builder()
            .name(skillDTO.getName())
            .category(skillDTO.getCategory())
            .proficiencyLevel(skillDTO.getProficiencyLevel())
            .build();
        
        Skill saved = skillRepository.save(skill);
        return toDTO(saved);
    }
    
    public SkillDTO updateSkill(Long id, SkillDTO skillDTO) {
        Skill skill = skillRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Skill not found"));
        
        skill.setName(skillDTO.getName());
        skill.setCategory(skillDTO.getCategory());
        skill.setProficiencyLevel(skillDTO.getProficiencyLevel());
        
        Skill saved = skillRepository.save(skill);
        return toDTO(saved);
    }
    
    public void deleteSkill(Long id) {
        skillRepository.deleteById(id);
    }
    
    private SkillDTO toDTO(Skill skill) {
        return SkillDTO.builder()
            .id(skill.getId())
            .name(skill.getName())
            .category(skill.getCategory())
            .proficiencyLevel(skill.getProficiencyLevel())
            .build();
    }
}
