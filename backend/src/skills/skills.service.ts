import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Skill, SkillDomain } from '@rise/shared';

@Injectable()
export class SkillsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Skill[]> {
    const skills = await this.prisma.skill.findMany({
      orderBy: { name: 'asc' },
    });
    return skills.map(this.toSkill);
  }

  async findByDomain(domain: SkillDomain): Promise<Skill[]> {
    const skills = await this.prisma.skill.findMany({
      where: { domain },
      orderBy: { name: 'asc' },
    });
    return skills.map(this.toSkill);
  }

  async findById(id: string): Promise<Skill | null> {
    const skill = await this.prisma.skill.findUnique({ where: { id } });
    return skill ? this.toSkill(skill) : null;
  }

  private toSkill(skill: any): Skill {
    return {
      id: skill.id,
      name: skill.name,
      domain: skill.domain as SkillDomain,
      description: skill.description,
      icon: skill.icon,
      prerequisites: skill.prerequisites || [],
    };
  }
}




