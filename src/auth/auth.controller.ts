import { AuthService } from './auth.service';
import {
  Body,
  Post,
  Request,
  UseGuards,
  ValidationPipe,
  Controller,
  Get,
} from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body(ValidationPipe) userDto: CreateUserDTO): Promise<void> {
    return await this.authService.signUp(userDto);
  }
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Request() req) {
    return this.authService.signIn(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Request() req) {
    return req.user;
  }
}
