import { Controller, Post, Inject, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RMQ_SERVICES, RMQ_CMD } from '@libs/common';
import { lastValueFrom } from 'rxjs';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(@Inject(RMQ_SERVICES.USERS) private readonly userClient: ClientProxy) { }

  @Post()
  login(@Body() createUserDto: CreateUserDto) {
    return lastValueFrom(this.userClient.send(RMQ_CMD.CREATE_NEW_USER, createUserDto))
  }
}
