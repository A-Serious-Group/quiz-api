import { ApiBody, ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"

export class Question {
    @Type(() => Number)
    id_question?: number


    @ApiProperty({description: 'A pergunta que será mostrada in game'})
    question: string

    @ApiProperty({description: 'Id do usuário que criou a pergunta'})
    @Type(() => Number)
    question_id_user: number


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
     question_id: number

     @ApiProperty({ description: 'Id do usuário, pra que seja listado todas perguntas desse usuário definido'})
     @Type(() => Number)
     id_user?: number

     @ApiProperty({description: 'Respostas que precisa chegar como a array com as respostas e com answers_correct informando qual a correta'})
    @Type(() => Answers)
    answers: Answers[];

    @ApiProperty({description: 'Esse campo name precisa ser mandado porque ele vai ser o nome do game que o usuário vai criar'})
    name: string
}

export class Answers {

    answer: string;
    
    @Type(() => Boolean)
    answers_correct: boolean;
    
}