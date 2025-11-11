import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Quest, UserQuest, QuestDifficulty } from '@rise/shared';
import { DAILY_QUEST_COUNT, XP_MULTIPLIERS, calculateSkillLevel, getSkillTier } from '@rise/shared';

@Injectable()
export class QuestsService {
  constructor(private prisma: PrismaService) {}

  async generateDailyQuests(userId: string): Promise<Quest[]> {
    // TODO: Implement AI-powered quest generation
    // For now, return mock quests
    const mockQuests = await this.prisma.quest.findMany({
      take: DAILY_QUEST_COUNT,
      orderBy: { createdAt: 'desc' },
    });
    return mockQuests.map(this.toQuest);
  }

  async getUserQuests(userId: string): Promise<UserQuest[]> {
    const userQuests = await this.prisma.userQuest.findMany({
      where: { userId },
      include: { quest: true },
      orderBy: { createdAt: 'desc' },
    });
    return userQuests.map(this.toUserQuest);
  }

  async acceptQuest(userId: string, questId: string): Promise<UserQuest> {
    const userQuest = await this.prisma.userQuest.create({
      data: {
        userId,
        questId,
        status: 'accepted',
        acceptedAt: new Date(),
      },
      include: { quest: true },
    });
    return this.toUserQuest(userQuest);
  }

  async completeQuest(userId: string, userQuestId: string, reflection?: string): Promise<UserQuest> {
    // Get the user quest with quest details
    const userQuest = await this.prisma.userQuest.findUnique({
      where: { id: userQuestId },
      include: { quest: true },
    });

    if (!userQuest || userQuest.userId !== userId) {
      throw new Error('Quest not found or unauthorized');
    }

    if (userQuest.status === 'completed') {
      throw new Error('Quest already completed');
    }

    // Calculate XP
    const baseXP = userQuest.quest.baseXP;
    const difficultyMultiplier = XP_MULTIPLIERS.quest[userQuest.quest.difficulty] || baseXP;
    let totalXP = difficultyMultiplier;

    // Reflection bonus (25% if provided)
    if (reflection && reflection.trim().length > 0) {
      totalXP += Math.floor(baseXP * 0.25);
    }

    // Update user quest
    const updatedUserQuest = await this.prisma.userQuest.update({
      where: { id: userQuestId },
      data: {
        status: 'completed',
        completedAt: new Date(),
        reflection,
        xpEarned: totalXP,
      },
      include: { quest: true },
    });

    // Update or create user skill
    const existingUserSkill = await this.prisma.userSkill.findUnique({
      where: {
        userId_skillId: {
          userId,
          skillId: userQuest.quest.skillId,
        },
      },
    });

    const newXP = existingUserSkill ? existingUserSkill.xp + totalXP : totalXP;
    const newLevel = calculateSkillLevel(newXP);
    const newTier = getSkillTier(newLevel);

    if (existingUserSkill) {
      await this.prisma.userSkill.update({
        where: { id: existingUserSkill.id },
        data: {
          xp: newXP,
          level: newLevel,
          tier: newTier,
          lastPracticedAt: new Date(),
        },
      });
    } else {
      await this.prisma.userSkill.create({
        data: {
          userId,
          skillId: userQuest.quest.skillId,
          xp: newXP,
          level: newLevel,
          tier: newTier,
          unlockedAt: new Date(),
          lastPracticedAt: new Date(),
        },
      });
    }

    // Create XP transaction record
    await this.prisma.xpTransaction.create({
      data: {
        userId,
        skillId: userQuest.quest.skillId,
        amount: totalXP,
        source: 'quest',
        metadata: {
          questId: userQuest.quest.id,
          userQuestId: userQuestId,
          reflection: !!reflection,
        },
      },
    });

    // Update user's Rise Score (simplified calculation)
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        userSkills: true,
        _count: {
          select: {
            userSkills: true,
            userQuests: { where: { status: 'completed' } },
          },
        },
      },
    });

    if (user) {
      const totalUserXP = user.userSkills.reduce((sum, us) => sum + us.xp, 0);
      const expertSkills = user.userSkills.filter((us) => us.level >= 16).length;
      
      // Simplified Rise Score calculation
      const xpComponent = Math.min(400, (totalUserXP / 100000) * 400);
      const diversityComponent = Math.min(300, (user._count.userSkills / 20) * 300);
      const consistencyComponent = Math.min(200, (user._count.userQuests / 100) * 200);
      const masteryComponent = Math.min(100, (expertSkills / 10) * 100);
      
      const newRiseScore = Math.round(xpComponent + diversityComponent + consistencyComponent + masteryComponent);

      await this.prisma.user.update({
        where: { id: userId },
        data: { riseScore: newRiseScore },
      });
    }

    return this.toUserQuest(updatedUserQuest);
  }

  private toQuest(quest: any): Quest {
    return {
      id: quest.id,
      skillId: quest.skillId,
      title: quest.title,
      description: quest.description,
      difficulty: quest.difficulty as QuestDifficulty,
      baseXP: quest.baseXP,
      estimatedMinutes: quest.estimatedMinutes,
      prerequisites: quest.prerequisites || [],
    };
  }

  private toUserQuest(userQuest: any): UserQuest {
    return {
      id: userQuest.id,
      userId: userQuest.userId,
      questId: userQuest.questId,
      status: userQuest.status as UserQuest['status'],
      acceptedAt: userQuest.acceptedAt,
      completedAt: userQuest.completedAt,
      reflection: userQuest.reflection,
      xpEarned: userQuest.xpEarned,
    };
  }
}

