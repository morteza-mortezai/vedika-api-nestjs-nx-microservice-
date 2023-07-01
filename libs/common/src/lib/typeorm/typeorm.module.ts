import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './typeorm.config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmConfig,
        })
    ],
    providers: [TypeOrmConfig]
})
export class TypeormModule { }
