import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QueezyRedefinationPasswordService } from './queezy_redefination_password.service';
import { CreateQueezyRedefinationPasswordDto } from './dto/create-queezy_redefination_password.dto';
import { UpdateQueezyRedefinationPasswordDto } from './dto/update-queezy_redefination_password.dto';

@Controller('queezy-redefination-password')
export class QueezyRedefinationPasswordController {
  constructor(private readonly queezyRedefinationPasswordService: QueezyRedefinationPasswordService) {}

  @Post()
  create(@Body() createQueezyRedefinationPasswordDto: CreateQueezyRedefinationPasswordDto) {
    return this.queezyRedefinationPasswordService.create(createQueezyRedefinationPasswordDto);
  }

  @Get()
  findAll() {
    return this.queezyRedefinationPasswordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queezyRedefinationPasswordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQueezyRedefinationPasswordDto: UpdateQueezyRedefinationPasswordDto) {
    return this.queezyRedefinationPasswordService.update(+id, updateQueezyRedefinationPasswordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.queezyRedefinationPasswordService.remove(+id);
  }
}
