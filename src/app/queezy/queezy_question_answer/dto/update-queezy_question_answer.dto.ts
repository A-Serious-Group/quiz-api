import { PartialType } from '@nestjs/swagger';
import { CreateQueezyQuestionAnswerDto } from './create-queezy_question_answer.dto';

export class UpdateQueezyQuestionAnswerDto extends PartialType(CreateQueezyQuestionAnswerDto) {}
