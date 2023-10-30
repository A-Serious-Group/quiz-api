import { Injectable } from '@nestjs/common';
import { CreateQueezyAnswerDto } from './dto/create-queezy_answer.dto';
import { UpdateQueezyAnswerDto } from './dto/update-queezy_answer.dto';

@Injectable()
export class QueezyAnswerService {
  create(createQueezyAnswerDto: CreateQueezyAnswerDto) {
    try{

    }catch (error){

    }
  }

  findAll() {
    return `This action returns all queezyAnswer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} queezyAnswer`;
  }

  update(id: number, updateQueezyAnswerDto: UpdateQueezyAnswerDto) {
    return `This action updates a #${id} queezyAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} queezyAnswer`;
  }
}
