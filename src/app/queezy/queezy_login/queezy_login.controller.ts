import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QueezyLoginService } from './queezy_login.service';
import { CreateQueezyLoginDto } from './dto/create-queezy_login.dto';
import { UpdateQueezyLoginDto } from './dto/update-queezy_login.dto';

@Controller('queezy-login')
export class QueezyLoginController {
  constructor(private readonly queezyLoginService: QueezyLoginService) {}

  @Post()
  create(@Body() createQueezyLoginDto: CreateQueezyLoginDto) {
    return this.queezyLoginService.create(createQueezyLoginDto);
  }

  @Get()
  findAll() {
    return this.queezyLoginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queezyLoginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQueezyLoginDto: UpdateQueezyLoginDto) {
    return this.queezyLoginService.update(+id, updateQueezyLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.queezyLoginService.remove(+id);
  }
}
