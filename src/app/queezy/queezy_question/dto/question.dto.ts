import { ApiBody, ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"

export class Question {
    @ApiProperty({description: 'Id serial da tabela question',example: 1})
    @Type(() => Number)
    id_question?: number


    @ApiProperty({description: 'A pergunta que será mostrada in game'})
    question: string

    @ApiProperty({description: 'Id do usuário que criou a pergunta'})
    @Type(() => Number)
    question_id_user: number


     @ApiProperty({description: 'Id da resposta da pergunta que foi criada'})
     answers_id: number

     
     @ApiProperty({description: 'A resposta da pergunta'})
     answer: string

     @ApiProperty({description: 'Informe a posição da onde vai ficar a resposta no queezy'})
     position: string

     @ApiProperty(
        {title: 'Coluna do tipo boleano',
        description: 'Campo que é booleano, true se for a resposta correta da pergunta fornecida, ou false se não for a resposta correta'
    })
    @Type(() => Boolean)
     answers_correct: boolean
     @ApiProperty({description: 'Esse question_id é o id de chave estrangeira da tabela question, que esta salva na tabela de resposta(answer) pra indentificar de qual pergunta é aquela resposta'})
     question_id: number

     @ApiProperty({ description: 'Id do usuário, pra que seja listado todas perguntas desse usuário definido'})
     @Type(() => Number)
     id_user?: number

}