import React, { useState } from 'react';
import { View, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import styled from 'styled-components/native';
import { useDailyQuests, useMyQuests, useAcceptQuest, useCompleteQuest } from '../hooks/useQuests';
import { QuestCompletionModal } from './QuestCompletionModal';

export function DailyQuestsCard() {
  const { data: dailyQuests, isLoading: loadingQuests } = useDailyQuests();
  const { data: myQuests } = useMyQuests();
  const acceptQuest = useAcceptQuest();
  const completeQuest = useCompleteQuest();
  const [selectedQuest, setSelectedQuest] = useState<string | null>(null);

  const getQuestStatus = (questId: string): 'pending' | 'accepted' | 'completed' => {
    const userQuest = myQuests?.find((uq) => uq.questId === questId);
    if (!userQuest) return 'pending';
    return userQuest.status as 'pending' | 'accepted' | 'completed';
  };

  const handleAcceptQuest = async (questId: string) => {
    try {
      await acceptQuest.mutateAsync(questId);
    } catch (error: any) {
      Alert.alert('Error', error.response?.data?.message || 'Failed to accept quest');
    }
  };

  const handleCompleteQuest = (userQuestId: string) => {
    setSelectedQuest(userQuestId);
  };

  const handleSubmitCompletion = async (reflection?: string) => {
    if (!selectedQuest) return;
    try {
      await completeQuest.mutateAsync({ userQuestId: selectedQuest, reflection });
      setSelectedQuest(null);
      Alert.alert('Success', 'Quest completed! XP earned.');
    } catch (error: any) {
      Alert.alert('Error', error.response?.data?.message || 'Failed to complete quest');
    }
  };

  if (loadingQuests) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Today's Quests</CardTitle>
        </CardHeader>
        <LoadingContainer>
          <ActivityIndicator size="small" color="#f5b041" />
        </LoadingContainer>
      </Card>
    );
  }

  if (!dailyQuests || dailyQuests.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Today's Quests</CardTitle>
        </CardHeader>
        <EmptyText>No quests available today. Check back tomorrow!</EmptyText>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Today's Quests</CardTitle>
          <QuestCount>{dailyQuests.length} available</QuestCount>
        </CardHeader>
        <QuestsList>
          {dailyQuests.map((quest) => {
            const status = getQuestStatus(quest.id);
            const userQuest = myQuests?.find((uq) => uq.questId === quest.id);

            return (
              <QuestItem key={quest.id} status={status}>
                <QuestContent>
                  <QuestTitle>{quest.title}</QuestTitle>
                  <QuestXP>+{quest.baseXP} XP</QuestXP>
                </QuestContent>
                {status === 'completed' ? (
                  <CompletedBadge>
                    <CompletedText>Done</CompletedText>
                  </CompletedBadge>
                ) : (
                  <QuestButton
                    status={status}
                    onPress={() => {
                      if (status === 'pending') {
                        handleAcceptQuest(quest.id);
                      } else if (status === 'accepted' && userQuest) {
                        handleCompleteQuest(userQuest.id);
                      }
                    }}
                    disabled={acceptQuest.isPending || completeQuest.isPending}
                  >
                    <QuestButtonText>
                      {status === 'accepted' ? 'Complete' : 'Accept'}
                    </QuestButtonText>
                  </QuestButton>
                )}
              </QuestItem>
            );
          })}
        </QuestsList>
      </Card>

      {selectedQuest && (
        <QuestCompletionModal
          visible={!!selectedQuest}
          onClose={() => setSelectedQuest(null)}
          onSubmit={handleSubmitCompletion}
        />
      )}
    </>
  );
}

const Card = styled.View`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 8px;
  elevation: 2;
`;

const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const QuestCount = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
`;

const QuestsList = styled.View`
  gap: 12px;
`;

const QuestItem = styled.View<{ status: string }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ status }) =>
    status === 'accepted' ? '#f5b04115' : '#f7f7fb'};
  border-radius: 12px;
  border-width: ${({ status }) => (status === 'accepted' ? 1 : 0)}px;
  border-color: #f5b041;
`;

const QuestContent = styled.View`
  flex: 1;
`;

const QuestTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`;

const QuestXP = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`;

const QuestButton = styled(TouchableOpacity)<{ status: string }>`
  padding: 10px 20px;
  background-color: ${({ status, theme }) =>
    status === 'accepted' ? theme.colors.accent : '#e0e0e0'};
  border-radius: 8px;
`;

const QuestButtonText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
`;

const LoadingContainer = styled.View`
  padding: 40px;
  align-items: center;
`;

const EmptyText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
  padding: 40px 20px;
  font-size: 16px;
`;

const CompletedBadge = styled.View`
  padding: 10px 20px;
  background-color: #27ae60;
  border-radius: 8px;
`;

const CompletedText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
`;

