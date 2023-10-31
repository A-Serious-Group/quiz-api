import { PartialType } from '@nestjs/swagger';
import { CreateQueezyGameDto } from './create-queezy_game.dto';

export class UpdateQueezyGameDto extends PartialType(CreateQueezyGameDto) {}
