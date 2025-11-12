import { SKILL_LEVEL_XP, SKILL_TIERS } from '../constants';
import { UserSkill } from '../types';

/**
 * Calculate skill level from total XP
 */
export function calculateSkillLevel(totalXP: number): number {
  for (let level = SKILL_LEVEL_XP.length - 1; level >= 0; level--) {
    if (totalXP >= SKILL_LEVEL_XP[level]) {
      return level + 1;
    }
  }
  return 1;
}

/**
 * Get skill tier from level
 */
export function getSkillTier(level: number): 'novice' | 'proficient' | 'advanced' | 'expert' {
  if (level >= SKILL_TIERS.expert.min) return 'expert';
  if (level >= SKILL_TIERS.advanced.min) return 'advanced';
  if (level >= SKILL_TIERS.proficient.min) return 'proficient';
  return 'novice';
}

/**
 * Calculate XP needed for next level
 */
export function getXPForNextLevel(currentLevel: number): number {
  if (currentLevel >= SKILL_LEVEL_XP.length) return 0;
  return SKILL_LEVEL_XP[currentLevel] - SKILL_LEVEL_XP[currentLevel - 1];
}

/**
 * Calculate progress percentage to next level
 */
export function getProgressToNextLevel(userSkill: UserSkill): number {
  const currentLevelXP = SKILL_LEVEL_XP[userSkill.level - 1] || 0;
  const nextLevelXP = SKILL_LEVEL_XP[userSkill.level] || SKILL_LEVEL_XP[SKILL_LEVEL_XP.length - 1];
  const xpNeeded = nextLevelXP - currentLevelXP;
  const xpProgress = userSkill.xp - currentLevelXP;
  return Math.min(100, Math.max(0, (xpProgress / xpNeeded) * 100));
}

/**
 * Calculate Rise Score (0-1000)
 */
export function calculateRiseScore(params: {
  totalXP: number;
  skillCount: number;
  streakDays: number;
  expertSkills: number;
}): number {
  const { totalXP, skillCount, streakDays, expertSkills } = params;
  
  // Normalize components (rough estimates)
  const xpComponent = Math.min(1, totalXP / 100000) * 400;
  const diversityComponent = Math.min(1, skillCount / 20) * 300;
  const consistencyComponent = Math.min(1, streakDays / 100) * 200;
  const masteryComponent = Math.min(1, expertSkills / 10) * 100;
  
  return Math.round(xpComponent + diversityComponent + consistencyComponent + masteryComponent);
}




