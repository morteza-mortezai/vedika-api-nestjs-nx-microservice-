import { Controller, Post, Inject, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RMQ_SERVICES, RMQ_CMD } from '@libs/common';
import { lastValueFrom } from 'rxjs';
import { LoginDto } from '../dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(@Inject(RMQ_SERVICES.AUTH) private readonly authClient: ClientProxy) { }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return lastValueFrom(this.authClient.send(RMQ_CMD.LOGIN, loginDto))
    // this.authClient.emit(RMQ_CMD.LOGIN, loginDto)
    // return 'Hello'
  }
}
