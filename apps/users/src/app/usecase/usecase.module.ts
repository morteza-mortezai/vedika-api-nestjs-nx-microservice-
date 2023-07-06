import { Module } from '@nestjs/common';
import { UserUseCase } from './user.usecase';
import { DataSourceModule } from '../data-source/data-source.module';

@Module({
  imports: [DataSourceModule],
  controllers: [],
  providers: [UserUseCase],
  exports: [UserUseCase],
})
export class UseCaseModule { }
