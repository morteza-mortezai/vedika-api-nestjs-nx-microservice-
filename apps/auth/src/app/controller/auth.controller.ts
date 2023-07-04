import { RMQ_CMD } from '@libs/common';
import { Controller, Get } from '@nestjs/common';
import { Payload, MessagePattern, RmqContext, Ctx } from '@nestjs/microservices'
import { RabbitmqService } from '../rabbit-mq/rabbit-mq.service';
// import { AppService } from './app.service';

@Controller()
export class AuthController {
  constructor(
    // private readonly appService: AppService
    private readonly rabbitmqService: RabbitmqService,
  ) { }

  @MessagePattern(RMQ_CMD.LOGIN)
  login(@Payload() loginDto: any, @Ctx() context: RmqContext) {
    this.rabbitmqService.ack(context)
    return 'hello from sevice'
  }
}
