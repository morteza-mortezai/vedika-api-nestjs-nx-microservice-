import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { RabbitmqModule } from '../rabbit-mq/rabbit-mq.module';
// import { AppService } from './app.service';

@Module({
  imports: [RabbitmqModule],
  controllers: [AuthController],
  // providers: [AppService],
})
export class ControllerModule { }
