import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

interface RiseScoreCardProps {
  score: number;
}

export function RiseScoreCard({ score }: RiseScoreCardProps) {
  const percentage = (score / 1000) * 100;

  return (
    <Card>
      <Gradient
        colors={['#f5b041', '#f39c12']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <ScoreContainer>
          <ScoreLabel>Rise Score</ScoreLabel>
          <ScoreValue>{score}</ScoreValue>
          <ScoreMax>/ 1000</ScoreMax>
        </ScoreContainer>
        <ProgressBar>
          <ProgressFill width={percentage} />
        </ProgressBar>
      </Gradient>
    </Card>
  );
}

const Card = styled.View`
  border-radius: 20px;
  overflow: hidden;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 12px;
  elevation: 4;
`;

const Gradient = styled(LinearGradient)`
  padding: 24px;
`;

const ScoreContainer = styled.View`
  align-items: center;
  margin-bottom: 16px;
`;

const ScoreLabel = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

const ScoreValue = styled.Text`
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1px;
`;

const ScoreMax = styled.Text`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 4px;
`;

const ProgressBar = styled.View`
  height: 8px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.View<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width}%;
  background-color: #ffffff;
  border-radius: 4px;
`;



