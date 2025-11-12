import { apiClient } from './client';
import { Quest, UserQuest } from '@rise/shared';

export const questsApi = {
  getDailyQuests: async (): Promise<Quest[]> => {
    return apiClient.get<Quest[]>('/quests/daily');
  },

  getMyQuests: async (): Promise<UserQuest[]> => {
    return apiClient.get<UserQuest[]>('/quests/my');
  },

  acceptQuest: async (questId: string): Promise<UserQuest> => {
    return apiClient.post<UserQuest>(`/quests/${questId}/accept`);
  },

  completeQuest: async (userQuestId: string, reflection?: string): Promise<UserQuest> => {
    return apiClient.post<UserQuest>(`/quests/${userQuestId}/complete`, { reflection });
  },
};




