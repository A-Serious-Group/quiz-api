import { PartialType } from '@nestjs/swagger';
import { CreateQueezyAnswerDto } from './create-queezy_answer.dto';

export class UpdateQueezyAnswerDto extends PartialType(CreateQueezyAnswerDto) {}
