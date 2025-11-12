import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Sample skills from PRD
  const skills = [
    // Cognitive Skills
    {
      name: 'Critical Thinking',
      domain: 'cognitive',
      description: 'Analyze and evaluate information objectively',
      icon: '🧠',
      prerequisites: [],
    },
    {
      name: 'Problem Solving',
      domain: 'cognitive',
      description: 'Systematically approach and solve complex problems',
      icon: '🧩',
      prerequisites: [],
    },
    {
      name: 'Memory Techniques',
      domain: 'cognitive',
      description: 'Master techniques for improved memory retention',
      icon: '🧠',
      prerequisites: [],
    },
    // Communication Skills
    {
      name: 'Active Listening',
      domain: 'communication',
      description: 'Fully concentrate on and understand what others are saying',
      icon: '👂',
      prerequisites: [],
    },
    {
      name: 'Public Speaking',
      domain: 'communication',
      description: 'Confidently present ideas to groups',
      icon: '🎤',
      prerequisites: ['Active Listening'],
    },
    {
      name: 'Empathy Development',
      domain: 'communication',
      description: 'Understand and share the feelings of others',
      icon: '❤️',
      prerequisites: [],
    },
    // Business Skills
    {
      name: 'Sales',
      domain: 'business',
      description: 'Master the art of selling products and services',
      icon: '💼',
      prerequisites: [],
    },
    {
      name: 'Marketing',
      domain: 'business',
      description: 'Create and execute marketing strategies',
      icon: '📊',
      prerequisites: [],
    },
    // Physical Skills
    {
      name: 'Yoga',
      domain: 'physical',
      description: 'Practice yoga for flexibility and mindfulness',
      icon: '🧘',
      prerequisites: [],
    },
    {
      name: 'Running',
      domain: 'physical',
      description: 'Build endurance through running',
      icon: '🏃',
      prerequisites: [],
    },
    // Meta Skills
    {
      name: 'Mindfulness',
      domain: 'meta',
      description: 'Cultivate present-moment awareness',
      icon: '🧘',
      prerequisites: [],
    },
    {
      name: 'Meditation',
      domain: 'meta',
      description: 'Develop a regular meditation practice',
      icon: '🧘‍♀️',
      prerequisites: ['Mindfulness'],
    },
  ];

  console.log('📚 Creating skills...');
  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { name: skill.name },
      update: {},
      create: skill,
    });
  }

  // Sample quests
  console.log('⚔️ Creating quests...');
  const criticalThinkingSkill = await prisma.skill.findUnique({
    where: { name: 'Critical Thinking' },
  });
  const activeListeningSkill = await prisma.skill.findUnique({
    where: { name: 'Active Listening' },
  });
  const mindfulnessSkill = await prisma.skill.findUnique({
    where: { name: 'Mindfulness' },
  });

  if (criticalThinkingSkill) {
    await prisma.quest.upsert({
      where: { id: 'quest-1' },
      update: {},
      create: {
        id: 'quest-1',
        skillId: criticalThinkingSkill.id,
        title: 'Analyze a News Article',
        description: 'Read a news article and identify potential biases or logical fallacies',
        difficulty: 'beginner',
        baseXP: 25,
        estimatedMinutes: 15,
        prerequisites: [],
      },
    });
  }

  if (activeListeningSkill) {
    await prisma.quest.upsert({
      where: { id: 'quest-2' },
      update: {},
      create: {
        id: 'quest-2',
        skillId: activeListeningSkill.id,
        title: 'Practice Active Listening',
        description: 'Have a conversation where you focus entirely on understanding the other person',
        difficulty: 'beginner',
        baseXP: 50,
        estimatedMinutes: 20,
        prerequisites: [],
      },
    });
  }

  if (mindfulnessSkill) {
    await prisma.quest.upsert({
      where: { id: 'quest-3' },
      update: {},
      create: {
        id: 'quest-3',
        skillId: mindfulnessSkill.id,
        title: '5-Minute Morning Meditation',
        description: 'Start your day with a 5-minute mindfulness meditation',
        difficulty: 'beginner',
        baseXP: 25,
        estimatedMinutes: 5,
        prerequisites: [],
      },
    });
  }

  // Sample achievements
  console.log('🏆 Creating achievements...');
  const achievements = [
    {
      name: 'First Steps',
      description: 'Complete your first quest',
      icon: '🎯',
      category: 'milestone',
    },
    {
      name: 'Week Warrior',
      description: 'Maintain a 7-day streak',
      icon: '🔥',
      category: 'streak',
    },
    {
      name: 'Skill Master',
      description: 'Reach level 10 in any skill',
      icon: '⭐',
      category: 'skill',
    },
  ];

  for (const achievement of achievements) {
    await prisma.achievement.upsert({
      where: { name: achievement.name },
      update: {},
      create: achievement,
    });
  }

  console.log('✅ Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });




