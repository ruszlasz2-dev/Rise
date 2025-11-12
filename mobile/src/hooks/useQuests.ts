import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { questsApi } from '../api/quests';
import { Quest, UserQuest } from '@rise/shared';

export function useDailyQuests() {
  return useQuery<Quest[]>({
    queryKey: ['quests', 'daily'],
    queryFn: () => questsApi.getDailyQuests(),
  });
}

export function useMyQuests() {
  return useQuery<UserQuest[]>({
    queryKey: ['quests', 'my'],
    queryFn: () => questsApi.getMyQuests(),
  });
}

export function useAcceptQuest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (questId: string) => questsApi.acceptQuest(questId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quests'] });
    },
  });
}

export function useCompleteQuest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userQuestId, reflection }: { userQuestId: string; reflection?: string }) =>
      questsApi.completeQuest(userQuestId, reflection),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quests'] });
      queryClient.invalidateQueries({ queryKey: ['user', 'profile'] });
      queryClient.invalidateQueries({ queryKey: ['skills'] });
    },
  });
}




