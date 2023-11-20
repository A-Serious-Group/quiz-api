import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  Put,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  Query,
} from '@nestjs/common';
import { QueezyQuestionService } from './queezy_question.service';
import { Question } from './dto/question.dto';
import { ApiTags } from '@nestjs/swagger';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags('Questions')
@Controller('queezy')
export class QueezyQuestionController {
  constructor(private readonly queezyQuestionService: QueezyQuestionService) {}

  @Post('/api/question')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, '../../uploads');
        },
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${file.originalname}`);
        },
      }),
    }),
  )
  create(@Body() dados: Question, @UploadedFile() file: Express.Multer.File) {
    return this.queezyQuestionService.createQuestion(dados, file);
  }

  @Get('/api/question')
  findAll(@Query() query: Question) {
    return this.queezyQuestionService.selectAllQuestion(query);
  }

  @Put('/api/question/:id')
  update(@Param('id') id_question: number, @Body() dados: Question) {
    return this.queezyQuestionService.updateQuestion(+id_question, dados);
  }

  @Get('/api/question/:id')
  selectById(@Param('id') id_question: number) {
    return this.queezyQuestionService.getQuestionWithAnswers(+id_question);
  }

  @Delete('/api/question/:id')
  delete(@Param('id') id_question: number) {
    return this.queezyQuestionService.deleteQuestion(+id_question);
  }

  @Get('/api/question/user/:id_user')
  selectQuestionsByUser(@Param('id_user') id_user: number) {
    return this.queezyQuestionService.selectQuestionByUserId(+id_user);
  }
  

  @Get('/api/check-question/:id_answer/:question_id')
  checkAnswer(@Param('id_answer')  id_answer: number, @Param('question_id') queston_id: number){
    return this.queezyQuestionService.checkAnswer(+id_answer, +queston_id)
  }
































  
  @Post('/api/start-game/:id_user/:id_user_game')
  async startGame(@Param('id_user') userId: number, @Param('id_user_game') chosenUserId: number) {
   return  await this.queezyQuestionService.startGame(userId, chosenUserId);
  }

  @Get(':userId/current-question')
  async getCurrentQuestion(@Param('userId') userId: number) {
    const question = this.queezyQuestionService.getCurrentQuestion(userId);
    return { question };
  }

  @Post('/api/answer-question/:id_user/:id_answer')
  async answerQuestion(@Param('id_user') userId: number, @Param('id_answer') answerId: number) {
    const isCorrect = await this.queezyQuestionService.answerQuestion(+userId, +answerId);
    return { isCorrect };
  }
}
