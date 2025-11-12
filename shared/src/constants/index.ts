import { SkillDomain } from '../types';

// XP Calculation Constants
export const XP_MULTIPLIERS = {
  quest: {
    beginner: 25,
    intermediate: 50,
    advanced: 100,
    expert: 200,
  },
  reflection: 25,
  streak: {
    base: 1.0,
    '7days': 1.5,
    '30days': 2.0,
  },
} as const;

// Skill Level Thresholds
export const SKILL_LEVEL_XP = [
  0, 100, 250, 500, 1000, 2000, // Novice (1-5)
  3500, 5000, 7000, 10000, 15000, // Proficient (6-10)
  20000, 30000, 45000, 65000, 90000, // Advanced (11-15)
  125000, 175000, 250000, 350000, 500000, // Expert (16-20)
];

export const SKILL_TIERS = {
  novice: { min: 1, max: 5 },
  proficient: { min: 6, max: 10 },
  advanced: { min: 11, max: 15 },
  expert: { min: 16, max: 20 },
} as const;

// Rise Score Calculation
export const RISE_SCORE_MAX = 1000;
export const RISE_SCORE_WEIGHTS = {
  totalXP: 0.4,
  skillDiversity: 0.3,
  consistency: 0.2,
  mastery: 0.1,
};

// Skill Domains
export const SKILL_DOMAINS: SkillDomain[] = [
  'cognitive',
  'communication',
  'business',
  'digital',
  'finance',
  'creative',
  'history',
  'physical',
  'games',
  'language',
  'science',
  'practical',
  'social',
  'meta',
];

// Quest Generation
export const DAILY_QUEST_COUNT = 3;
export const MAX_ACTIVE_SKILLS = 3;

// Streak Constants
export const STREAK_BONUS_DAYS = 7;
export const STREAK_MULTIPLIER_DAYS = 30;




