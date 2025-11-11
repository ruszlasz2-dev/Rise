import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

interface QuestDetailCardProps {
  questId: string;
}

export function QuestDetailCard({ questId }: QuestDetailCardProps) {
  return (
    <Card>
      <Title>Quest Detail</Title>
      <Description>Quest ID: {questId}</Description>
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
  margin-bottom: 12px;
`;

const Description = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
`;



