import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './typeorm.config';
import { EnvironmentModule } from '../environment/environment.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmConfig,
        }),
        EnvironmentModule
    ],
    providers: [TypeOrmConfig]
})
export class TypeormModule { }
