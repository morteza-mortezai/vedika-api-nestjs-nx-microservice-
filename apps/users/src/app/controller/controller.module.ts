import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UseCaseModule } from '../usecase/usecase.module';
import { RabbitmqModule } from '../rabbit-mq/rabbit-mq.module';


@Module({
  imports: [UseCaseModule, RabbitmqModule],
  controllers: [UserController],
  providers: [],
})
export class ControllerModule { }
