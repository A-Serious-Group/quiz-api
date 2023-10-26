import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QueezyLoginService } from './queezy_login.service';
import { CreateQueezyLoginDto } from './dto/create-queezy_login.dto';
import { UpdateQueezyLoginDto } from './dto/update-queezy_login.dto';

@Controller('queezy-login')
export class QueezyLoginController {
  constructor(private readonly queezyLoginService: QueezyLoginService) {}

}
