import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { RabbitmqModule } from '../rabbit-mq/rabbit-mq.module';
import { UserController } from './user.controller';

@Module({
  imports: [RabbitmqModule],
  controllers: [AuthController, UserController],
})
export class ControllersModule { }
