import { ApiProperty } from "@nestjs/swagger"

export class AuthDto {
    @ApiProperty({description: 'Email do usuário pra logar'})
    email: string

    @ApiProperty({description: 'Senha do usuário'})
    password: string
}