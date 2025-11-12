import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { QuestsService } from './quests.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('quests')
@UseGuards(JwtAuthGuard)
export class QuestsController {
  constructor(private questsService: QuestsService) {}

  @Get('daily')
  async getDailyQuests(@Request() req) {
    return this.questsService.generateDailyQuests(req.user.id);
  }

  @Get('my')
  async getMyQuests(@Request() req) {
    return this.questsService.getUserQuests(req.user.id);
  }

  @Post(':questId/accept')
  async acceptQuest(@Request() req, @Param('questId') questId: string) {
    return this.questsService.acceptQuest(req.user.id, questId);
  }

  @Post(':userQuestId/complete')
  async completeQuest(
    @Request() req,
    @Param('userQuestId') userQuestId: string,
    @Body('reflection') reflection?: string,
  ) {
    return this.questsService.completeQuest(req.user.id, userQuestId, reflection);
  }
}




