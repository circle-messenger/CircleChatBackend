import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('code')
  getAccessCode() {
    this.authService.generateCode();
  }

  @Post('access')
  giveAccess() {
    this.authService.giveAccess();
  }

  @Post('login')
  loginUser(@Body() loginDto: LoginDto) {
    this.authService.loginUser();
  }

  @Post('register')
  registerUser(@Body() registerDto: RegisterDto) {
    this.authService.registerUser();
  }

  @Post('logout')
  logoutUser() {
    this.authService.logoutUser();
  }
}
