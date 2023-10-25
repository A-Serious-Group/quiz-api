import { PartialType } from '@nestjs/mapped-types';
import { CreateQueezyCadastroDto } from './create-queezy_cadastro.dto';

export class UpdateQueezyCadastroDto extends PartialType(CreateQueezyCadastroDto) {}
