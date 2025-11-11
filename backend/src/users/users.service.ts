import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@rise/shared';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: { email: string; password: string; name: string }): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name,
        riseScore: 0,
      },
    });
    return this.toUser(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user ? this.toUser(user) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user ? this.toUser(user) : null;
  }

  async validatePassword(userId: string, password: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) return false;
    return bcrypt.compare(password, user.password);
  }

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        userSkills: {
          include: { skill: true },
        },
        _count: {
          select: {
            userSkills: true,
            userQuests: true,
            achievements: true,
          },
        },
      },
    });

    if (!user) return null;

    const totalXP = user.userSkills.reduce((sum, us) => sum + us.xp, 0);
    const expertSkills = user.userSkills.filter((us) => us.level >= 16).length;

    return {
      ...this.toUser(user),
      totalXP,
      skillCount: user._count.userSkills,
      questCount: user._count.userQuests,
      achievementCount: user._count.achievements,
      expertSkills,
      activeSkills: user.userSkills.map((us) => ({
        skillId: us.skillId,
        skillName: us.skill.name,
        level: us.level,
        xp: us.xp,
        tier: us.tier,
      })),
    };
  }

  private toUser(user: any): User {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
