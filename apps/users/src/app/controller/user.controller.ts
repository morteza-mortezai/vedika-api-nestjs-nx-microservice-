import { Controller, UseFilters } from '@nestjs/common';
import { UserUseCase } from '../usecase/user.usecase';
import { MessagePattern, Payload, RmqContext, Ctx } from '@nestjs/microservices';
import { RMQ_CMD, RPCExceptionFilter } from '@libs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { RabbitmqService } from '../rabbit-mq/rabbit-mq.service';

@UseFilters(RPCExceptionFilter)
@Controller()
export class UserController {
  constructor(private readonly userUseCase: UserUseCase,
    private readonly rabbitmqService: RabbitmqService
  ) { }

  @MessagePattern(RMQ_CMD.CREATE_NEW_USER)
  create(@Payload() createUserDto: CreateUserDto, @Ctx() context: RmqContext) {
    // this.rabbitmqService.ack(context)
    return this.userUseCase.createUser(createUserDto);
  }
}
