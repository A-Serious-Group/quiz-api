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
// Esse controller eu comentei porque foi outro teste que fiz mandando o arquivo sozinho, mas o certo é o primeiro la
  // @Post('/api/question/upload')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: '../../uploads',
  //     }),
  //   }),
  // )
  // uploadImage(
  //   @UploadedFile(
  //     new ParseFilePipe({
  //       validators: [
  //         new MaxFileSizeValidator({ maxSize: 999896 }),
  //         // new FileTypeValidator({fileType: 'image/jpg'})
  //       ],
  //     }),
  //   )
  //   file: Express.Multer.File,
  // ) {
  //   console.log(file, 'file');

  //   return;
  // }
}
