import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileStatsCard } from '../components/ProfileStatsCard';

export function ProfileScreen() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Content>
          <Title>Profile</Title>
          <ProfileStatsCard />
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
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 24px;
`;




