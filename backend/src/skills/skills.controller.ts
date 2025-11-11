import { Controller, Get, Param } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillDomain } from '@rise/shared';

@Controller('skills')
export class SkillsController {
  constructor(private skillsService: SkillsService) {}

  @Get()
  async findAll() {
    return this.skillsService.findAll();
  }

  @Get('domain/:domain')
  async findByDomain(@Param('domain') domain: SkillDomain) {
    return this.skillsService.findByDomain(domain);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.skillsService.findById(id);
  }
}



