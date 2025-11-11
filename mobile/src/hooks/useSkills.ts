import { useQuery } from '@tanstack/react-query';
import { skillsApi } from '../api/skills';
import { Skill, SkillDomain } from '@rise/shared';

export function useAllSkills() {
  return useQuery<Skill[]>({
    queryKey: ['skills', 'all'],
    queryFn: () => skillsApi.getAllSkills(),
  });
}

export function useSkillsByDomain(domain: SkillDomain) {
  return useQuery<Skill[]>({
    queryKey: ['skills', 'domain', domain],
    queryFn: () => skillsApi.getSkillsByDomain(domain),
  });
}



