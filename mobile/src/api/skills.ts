import { apiClient } from './client';
import { Skill, SkillDomain } from '@rise/shared';

export const skillsApi = {
  getAllSkills: async (): Promise<Skill[]> => {
    return apiClient.get<Skill[]>('/skills');
  },

  getSkillsByDomain: async (domain: SkillDomain): Promise<Skill[]> => {
    return apiClient.get<Skill[]>(`/skills/domain/${domain}`);
  },

  getSkillById: async (id: string): Promise<Skill> => {
    return apiClient.get<Skill>(`/skills/${id}`);
  },
};




