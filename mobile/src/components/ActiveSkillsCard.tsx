import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { useUserProfile } from '../hooks/useUser';
import { SKILL_LEVEL_XP } from '@rise/shared';

export function ActiveSkillsCard() {
  const { data: profile, isLoading } = useUserProfile();

  if (isLoading) {
    return (
      <Card>
        <CardTitle>Active Skills</CardTitle>
        <LoadingContainer>
          <ActivityIndicator size="small" color="#f5b041" />
        </LoadingContainer>
      </Card>
    );
  }

  const activeSkills = profile?.activeSkills || [];

  if (activeSkills.length === 0) {
    return (
      <Card>
        <CardTitle>Active Skills</CardTitle>
        <EmptyText>No active skills yet. Start a quest to begin!</EmptyText>
      </Card>
    );
  }

  return (
    <Card>
      <CardTitle>Active Skills</CardTitle>
      <SkillsList>
        {activeSkills.slice(0, 3).map((skill: any) => {
          // Calculate progress percentage using SKILL_LEVEL_XP constants
          const currentLevelXP = SKILL_LEVEL_XP[skill.level - 1] || 0;
          const nextLevelXP = SKILL_LEVEL_XP[skill.level] || SKILL_LEVEL_XP[SKILL_LEVEL_XP.length - 1];
          const xpNeeded = nextLevelXP - currentLevelXP;
          const xpProgress = skill.xp - currentLevelXP;
          const progress = xpNeeded > 0 ? Math.min(100, Math.max(0, (xpProgress / xpNeeded) * 100)) : 100;

          return (
            <SkillItem key={skill.skillId}>
              <SkillHeader>
                <SkillName>{skill.skillName}</SkillName>
                <SkillLevel>Level {skill.level}</SkillLevel>
              </SkillHeader>
              <ProgressBar>
                <ProgressFill width={progress} />
              </ProgressBar>
            </SkillItem>
          );
        })}
      </SkillsList>
    </Card>
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

const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
`;

const SkillsList = styled.View`
  gap: 16px;
`;

const SkillItem = styled.View``;

const SkillHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const SkillName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillLevel = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
`;

const ProgressBar = styled.View`
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled.View<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width}%;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 3px;
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

