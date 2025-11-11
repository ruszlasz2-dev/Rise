import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RiseScoreCard } from '../components/RiseScoreCard';
import { DailyQuestsCard } from '../components/DailyQuestsCard';
import { ActiveSkillsCard } from '../components/ActiveSkillsCard';
import { useUserProfile } from '../hooks/useUser';
import { useAuth } from '../context/AuthContext';

export function HomeScreen() {
  const { user } = useAuth();
  const { data: profile, isLoading } = useUserProfile();

  if (isLoading) {
    return (
      <Container>
        <LoadingContainer>
          <ActivityIndicator size="large" color="#f5b041" />
        </LoadingContainer>
      </Container>
    );
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Content>
          <Header>
            <Title>Rise</Title>
            <Subtitle>Level Up Your Real Life</Subtitle>
          </Header>
          <RiseScoreCard score={profile?.riseScore || user?.riseScore || 0} />
          <DailyQuestsCard />
          <ActiveSkillsCard />
        </Content>
      </ScrollView>
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.View`
  padding: 24px;
  gap: 20px;
`;

const Header = styled.View`
  margin-bottom: 8px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.text};
`;

const Subtitle = styled.Text`
  margin-top: 4px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
`;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

