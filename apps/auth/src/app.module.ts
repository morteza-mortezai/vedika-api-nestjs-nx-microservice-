import { Module } from '@nestjs/common';
import { ControllerModule } from './app/controller/controller.module';

@Module({
  imports: [ControllerModule],
  controllers: [],
})
export class AppModule { }
