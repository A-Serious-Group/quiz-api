import { Injectable } from '@nestjs/common';
import { CreateQueezyLoginDto } from './dto/create-queezy_login.dto';
import { UpdateQueezyLoginDto } from './dto/update-queezy_login.dto';

@Injectable()
export class QueezyLoginService {
  create(createQueezyLoginDto: CreateQueezyLoginDto) {
    return 'This action adds a new queezyLogin';
  }

  findAll() {
    return `This action returns all queezyLogin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} queezyLogin`;
  }

  update(id: number, updateQueezyLoginDto: UpdateQueezyLoginDto) {
    return `This action updates a #${id} queezyLogin`;
  }

  remove(id: number) {
    return `This action removes a #${id} queezyLogin`;
  }
}
