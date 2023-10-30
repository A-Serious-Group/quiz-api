import { PartialType } from '@nestjs/swagger';
import { CreateQueezyRedefinationPasswordDto } from './create-queezy_redefination_password.dto';

export class UpdateQueezyRedefinationPasswordDto extends PartialType(CreateQueezyRedefinationPasswordDto) {}
