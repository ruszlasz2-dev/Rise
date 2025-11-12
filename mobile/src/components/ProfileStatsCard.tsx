import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

export function ProfileStatsCard() {
  return (
    <Card>
      <Title>Your Stats</Title>
      <StatsGrid>
        <StatItem>
          <StatValue>42</StatValue>
          <StatLabel>Day Streak</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>1,250</StatValue>
          <StatLabel>Total XP</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>12</StatValue>
          <StatLabel>Skills</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>8</StatValue>
          <StatLabel>Achievements</StatLabel>
        </StatItem>
      </StatsGrid>
    </Card>
  );
}

const Card = styled.View`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 24px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
`;

const StatsGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;

const StatItem = styled.View`
  flex: 1;
  min-width: 45%;
  align-items: center;
  padding: 20px;
  background-color: #f7f7fb;
  border-radius: 16px;
`;

const StatValue = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 8px;
`;

const StatLabel = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;




