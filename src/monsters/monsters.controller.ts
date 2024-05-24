import { Controller, Get, Param } from '@nestjs/common';
import { MonstersService } from './monsters.service';
import { Monster } from './monster.entity';

@Controller('monsters')
export class MonstersController {
  constructor(private readonly monstersService: MonstersService) {}

  @Get(':id')
  async getAndSaveMonster(@Param('id') id: string): Promise<Monster> {
    return this.monstersService.fetchAndSaveMonster(id);
  }
}
