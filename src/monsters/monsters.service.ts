import { Injectable, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Monster } from './monster.entity';
import { AxiosResponse } from 'axios';

@Injectable()
export class MonstersService {
  constructor(
    @InjectRepository(Monster)
    private readonly monsterRepository: Repository<Monster>,
    private readonly httpService: HttpService,
  ) {}

  async fetchAndSaveMonster(monsterId: string): Promise<Monster> {
    const response: AxiosResponse<any> = await this.httpService
      .get(`https://www.dnd5eapi.co/api/monsters/${monsterId}`)
      .toPromise();

    const monsterData = response.data;
    const monster = new Monster();
    monster.name = monsterData.name;
    monster.type = monsterData.type;
    monster.hit_points = monsterData.hit_points;

    return this.monsterRepository.save(monster);
  }
}
