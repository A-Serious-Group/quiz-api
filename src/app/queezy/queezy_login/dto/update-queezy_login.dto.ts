import { PartialType } from '@nestjs/mapped-types';
import { CreateQueezyLoginDto } from './create-queezy_login.dto';

export class UpdateQueezyLoginDto extends PartialType(CreateQueezyLoginDto) {}
