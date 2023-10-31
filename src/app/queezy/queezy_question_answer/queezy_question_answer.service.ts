import { Injectable } from '@nestjs/common';
import { CreateQueezyQuestionAnswerDto } from './dto/create-queezy_question_answer.dto';
import { UpdateQueezyQuestionAnswerDto } from './dto/update-queezy_question_answer.dto';

@Injectable()
export class QueezyQuestionAnswerService {
  create(createQueezyQuestionAnswerDto: CreateQueezyQuestionAnswerDto) {
    return 'This action adds a new queezyQuestionAnswer';
  }

  findAll() {
    return `This action returns all queezyQuestionAnswer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} queezyQuestionAnswer`;
  }

  update(id: number, updateQueezyQuestionAnswerDto: UpdateQueezyQuestionAnswerDto) {
    return `This action updates a #${id} queezyQuestionAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} queezyQuestionAnswer`;
  }
}
