import { Module } from '@nestjs/common';
import { QueezyGamesService } from './queezy_games.service';
import { QueezyGamesController } from './queezy_games.controller';

@Module({
  controllers: [QueezyGamesController],
  providers: [QueezyGamesService],
})
export class QueezyGamesModule {}
