import { ApiProperty } from "@nestjs/swagger"

export class CreateQueezyCadastroDto {
    
    @ApiProperty({
        description: 'O nome do usuário',
        example: 'Luis Guilherme'})
    name: string

    @ApiProperty({description: 'Email do usuário a ser cadastrado',
    example: 'gui_teste@hotmail.com'}
    )
    email: string

    
    @ApiProperty({description: 'Senha do usuário a ser cadastrado'})
    password: string

    id_permission: number

    name_permission: string
}
