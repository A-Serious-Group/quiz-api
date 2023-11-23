import { ApiProperty } from "@nestjs/swagger"

export class CreateQueezyUserDto {
    @ApiProperty({description: 'Id serial do usuário'})
    id_user?: number
    
    @ApiProperty({description: 'Nome do usuário a ser alterado'})
    name?: string
    
    @ApiProperty({description: 'Email do usuário a ser alterado'})
    email: string
    
    @ApiProperty({description: 'Senha do usuário a ser alterado'})
    password: string
}
