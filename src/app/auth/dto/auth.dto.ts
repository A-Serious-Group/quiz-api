import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty } from "class-validator"

export class AuthDto {
    @ApiProperty({description: 'Email do usuário pra logar'})
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty({description: 'Senha do usuário'})
    @IsNotEmpty()
    password: string
}