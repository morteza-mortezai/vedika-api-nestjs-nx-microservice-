import { Module } from '@nestjs/common';
import { ControllersModule } from './app/controllers/controllers.module';

@Module({
  imports: [ControllersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
