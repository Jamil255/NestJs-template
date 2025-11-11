import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/skip-auth';
import { SignupDto } from './dto/auth.dto';
import { ListService } from './list.service';
import { SignupService } from './signup.service';

@Controller('auth')
@ApiTags('auth')
@ApiBearerAuth()
export class AuthController {
  constructor(
    private readonly service: SignupService,
    private readonly get: ListService,
  ) {}

  @Post('signup')
  @Public()
  //   @Roles(Role.Client)
  create(@Body() dto: SignupDto) {
    return this.service.signup(dto);
  }
  @Get()
  list() {
    return this.get.list();
  }
}
