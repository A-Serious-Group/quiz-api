import { HttpException, HttpStatus, Injectable, UploadedFile } from '@nestjs/common';
import { PrismaDbConfigService } from '../../../prisma/prisma-db-config/prisma-db-config.service';
import { Question } from './dto/question.dto';
import { join } from 'path';
import * as fs from 'fs';

@Injectable()
export class QueezyQuestionService {
  private games: { [userId: number]: { questions: Question[], currentQuestionIndex: number } } = {};
  constructor(private prismaDbService: PrismaDbConfigService) {}

  async createQuestion(
    dados: Question,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
     const response = await  this.criarPerguntaSemImagem(dados)
     return {mensagem: response.mensagem, data: response.data}
    } else {
      const imagePath = join(__dirname, '..', '../../uploads', file.filename);
      const urlImage = imagePath.split('src')[1];
      const existeUsuario = await this.prismaDbService.users.findFirst({
        where: { id_user: +dados.question_id_user },
         })
      if(existeUsuario == null){
        return  {mensagem:'Id do usuário informado não existe'}
       }
      const question = await this.prismaDbService.questions.create({
        data: {
          question: dados.question,
          question_user_id: +dados.question_id_user,
          imagem: file.path,
          game_id: dados.game_id    
        },
      });
      const selectQuestion = await this.prismaDbService.questions.findFirst({
        where: { id_question: question.id_question },
      });
  
      const answer = await this.prismaDbService.answers.create({
        data: {
          answers: dados.answer,
          question_id: selectQuestion.id_question,
          answers_correct: false, // deixei falso fixo aqui, porque no insominia manda com aquele formato-data la pra enviar arquivo, não vem como boolean ai tentei passar um toBoolean() mas não
        },
      });
      await this.prismaDbService.question_answers.create({
        data: {
          question_id: selectQuestion.id_question,
          answer_id: answer.id_answer,
          position: dados.position,
        },
      });
  
      if (question) {
        return {
          status: 201,
          mensagem: 'Questão criada com sucesso',
          data: question
        };
      } else {
        return { status: 400, mensagem: 'Error creating a question' };
      }
      

    }
  }

  public criarPerguntaSemImagem = async (dados: Question) => {
  
    const existeUsuario = await this.prismaDbService.users.findFirst({
      where: { id_user: +dados.id_user },
       })
       
    if(!existeUsuario){
      return  {mensagem:'Id do usuário informado não existe'}
     }

   // DEIXEI COMENTADO ESSA FUNÇÃO DE CRIAR O GAME
    // await this.prismaDbService.games.create({
    //   data: {
    //     name: dados.name,
    //     url: 'www.teste.com.br',
    //     user_id: +dados.id_user,
    //   }
    //  })

    const question = await this.prismaDbService.questions.create({
      data: {
        question: dados.question,
        question_user_id: +dados.id_user,
        game_id: dados.game_id
      },
    });
    const selectQuestion = await this.prismaDbService.questions.findFirst({
      where: { id_question: question.id_question },
    });

    const answers = dados.answers

    for(let item of answers){

      const answer = await this.prismaDbService.answers.create({
        data: {
          answers: item.answer,
          question_id: selectQuestion.id_question,
          answers_correct: item.answers_correct,
        },
      });

      await this.prismaDbService.question_answers.create({
        data: {
          question_id: selectQuestion.id_question,
          answer_id: answer.id_answer,
          position: '',
        },
      });
    }

    if (question) {
      return {
        status: 201,
        mensagem: 'Questão criada com sucesso',
        data: {question, awnser: answers}
      };
    } else {
      return { status: 400, mensagem: 'Error creating a question' };
    }
  };

  async selectAllQuestion(query: Question) {
    const question = await this.prismaDbService.questions.findMany(
      {
        where: { question_user_id: query.id_user },
        include: { answer_fk: true },
      }
    );
    return { mensagem: 'Todas questões listadas com sucesso', questions: question };
  }

  async updateQuestion(id: number, dados: Question) {
    const question = await this.prismaDbService.questions.update({
      where: { id_question: id },
      data: dados,
    });
    return { question: question };
  }

  async selectQuestionByUserId(id_user: number){
    const userQuestion = await this.prismaDbService.questions.findMany({
      where: { question_user_id: id_user},
      include: { answer_fk: true },

    })

    return {mensagem: 'Lista de perguntas e respostas listado com sucesso', userQuestion}
  }

  async selectQuestionById(id: number) {
    const question = await this.prismaDbService.questions.findUnique({
      where: { id_question: id },
    });
    if (!question) {
      return { status: 404, mensagem: 'No data found for the query' };
    } else {
      return {
        status: 200,
        mensagem: 'Question listed with success',
        question: question,
      };
    }
  }

  async deleteQuestion(id_question: number) {
    const question = await this.selectQuestionById(id_question);
    if (question.question) {
      await this.prismaDbService.questions.delete({
        where: { id_question: id_question },
      });
      return { status: 200, mensagem: 'Question deleted with success' };
    } else {
      return { status: 404, mensagem: 'No data found for the query' };
    }
  }

  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    const imagePath = join(__dirname, '..', 'uploads', file.filename);

    // Aqui você pode salvar o caminho da imagem (imagePath) no seu banco de dados PostgreSQL
    // Supondo que você tenha um serviço para isso, poderia ser algo como:
    // const imageRecord = await this.prismaDbService.questions.create({ path: imagePath });

    return; //imageRecord;
  }

  async getQuestionWithAnswers(questionId: number){
    const question = await this.prismaDbService.questions.findUnique({
      where: { id_question: questionId },
      include: { answer_fk: true },
    });
  }

  async getByGameId(id: number){
    const question = await this.prismaDbService.questions.findMany({
      where: { game_id: id },
      include: {
        answer_fk: true
      }
    });
    return question
  }

  async checkAnswer(id_answer: number, question_id: number ){
    const answer = await this.prismaDbService.answers.findUnique({
       where: {id_answer: id_answer, question_id: question_id}
    })
    if(answer){
      return {isCorrect: answer.answers_correct}
    }else{
      throw new Error("Resposta não encontrada")
    }
  }

  async startGame(userId: number, chosenUserId: number) {
    // const questions = await this.selectQuestionByUserId(chosenUserId);
    // return this.games[userId] = { questions: this.shuffleArray(questions).slice(0, 10), currentQuestionIndex: 0 };
  }

  getCurrentQuestion(userId: number) {
    if (!this.games[userId]) {
      throw new Error('Game not started for this user');
    }
    return this.games[userId].questions[this.games[userId].currentQuestionIndex];
  }

  async answerQuestion(userId: number, answerId: number) {
    // const currentQuestion = this.getCurrentQuestion(userId);
    const answer = await this.prismaDbService.answers.findFirst({
      where: { id_answer: answerId },
    });
    // if (answer.question_id !== currentQuestion.id_question) {
    //   throw new Error('Answer does not belong to the current question');
    // }

    if (answer.answers_correct) {
      this.games[userId].currentQuestionIndex++;
      return true;
    } else {
      this.games[userId].currentQuestionIndex = 0;
      return false;
    }
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  

  
}
