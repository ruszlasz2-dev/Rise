import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QuestDetailCard } from '../components/QuestDetailCard';

export function QuestScreen({ route }: any) {
  const { questId } = route.params;

  return (
    <Container>
      <QuestDetailCard questId={questId} />
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
`;




