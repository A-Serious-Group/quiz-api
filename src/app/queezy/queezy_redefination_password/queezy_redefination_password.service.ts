import { Injectable } from '@nestjs/common';
import { CreateQueezyRedefinationPasswordDto } from './dto/create-queezy_redefination_password.dto';
import { UpdateQueezyRedefinationPasswordDto } from './dto/update-queezy_redefination_password.dto';

@Injectable()
export class QueezyRedefinationPasswordService {
  create(createQueezyRedefinationPasswordDto: CreateQueezyRedefinationPasswordDto) {
    return 'This action adds a new queezyRedefinationPassword';
  }

  findAll() {
    return `This action returns all queezyRedefinationPassword`;
  }

  findOne(id: number) {
    return `This action returns a #${id} queezyRedefinationPassword`;
  }

  update(id: number, updateQueezyRedefinationPasswordDto: UpdateQueezyRedefinationPasswordDto) {
    return `This action updates a #${id} queezyRedefinationPassword`;
  }

  remove(id: number) {
    return `This action removes a #${id} queezyRedefinationPassword`;
  }
}
