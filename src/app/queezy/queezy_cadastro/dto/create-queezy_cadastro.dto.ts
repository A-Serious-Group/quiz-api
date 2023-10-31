import { ApiProperty } from "@nestjs/swagger"

export class CreateQueezyCadastroDto {
    @ApiProperty({description: 'O nome do usuário'})
    name: string

    @ApiProperty({description: 'Email do usuário a ser cadastrado'})
    email: string

    
    @ApiProperty({description: 'Senha do usuário a ser cadastrado'})
    password: string

    @ApiProperty(
        {description: 'Envie o id da permissão mande apenas o id 1 ou o 2, o 1 vai ser ADM e o 2 USER, com isso validarei se o usuário é adm ou user'})
    permission_id: number
}
