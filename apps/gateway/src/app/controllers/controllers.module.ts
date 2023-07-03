import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { RabbitmqModule } from '../rabbit-mq/rabbit-mq.module';

@Module({
  imports: [RabbitmqModule],
  controllers: [AuthController],
})
export class ControllersModule { }
