// User & Profile Types
export interface User {
  id: string;
  email: string;
  name: string;
  riseScore: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends User {
  activeSkills: string[];
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
}

// Skill Types
export type SkillDomain =
  | 'cognitive'
  | 'communication'
  | 'business'
  | 'digital'
  | 'finance'
  | 'creative'
  | 'history'
  | 'physical'
  | 'games'
  | 'language'
  | 'science'
  | 'practical'
  | 'social'
  | 'meta';

export interface Skill {
  id: string;
  name: string;
  domain: SkillDomain;
  description: string;
  icon: string;
  prerequisites?: string[];
}

export interface UserSkill {
  userId: string;
  skillId: string;
  level: number; // 1-20
  xp: number;
  tier: 'novice' | 'proficient' | 'advanced' | 'expert';
  unlockedAt: Date;
  lastPracticedAt?: Date;
}

// Quest Types
export type QuestDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Quest {
  id: string;
  skillId: string;
  title: string;
  description: string;
  difficulty: QuestDifficulty;
  baseXP: number;
  estimatedMinutes: number;
  prerequisites?: string[];
}

export interface UserQuest {
  id: string;
  userId: string;
  questId: string;
  status: 'pending' | 'accepted' | 'completed' | 'skipped';
  acceptedAt?: Date;
  completedAt?: Date;
  reflection?: string;
  xpEarned?: number;
}

// Reflection Types
export interface Reflection {
  id: string;
  userQuestId: string;
  content: string;
  qualityScore?: number; // AI-assessed 0-100
  createdAt: Date;
}

// XP & Progression Types
export interface XPTransaction {
  id: string;
  userId: string;
  skillId: string;
  amount: number;
  source: 'quest' | 'reflection' | 'streak' | 'achievement';
  metadata?: Record<string, unknown>;
  createdAt: Date;
}

// Achievement Types
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'skill' | 'streak' | 'milestone' | 'cross-domain';
}

export interface UserAchievement {
  userId: string;
  achievementId: string;
  unlockedAt: Date;
}




