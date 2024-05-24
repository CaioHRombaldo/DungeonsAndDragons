import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonstersService } from './monsters.service';
import { MonstersController } from './monsters.controller';
import { Monster } from './monster.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Monster]), HttpModule],
  providers: [MonstersService],
  controllers: [MonstersController],
})
export class MonstersModule {}
