import { PartialType } from '@nestjs/mapped-types';
import { CreateQueezyUserDto } from './create-queezy_user.dto';

export class UpdateQueezyUserDto extends PartialType(CreateQueezyUserDto) {}
