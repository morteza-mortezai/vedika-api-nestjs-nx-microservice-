import { Injectable } from '@nestjs/common'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { EnvironmentService } from '../environment/environment.service';
import { join } from 'path';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
    constructor(
        private environmentService: EnvironmentService
    ) { }
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            // type: 'mongodb',
            // url: this.environmentService.getMongoDbUri(),
            // entities: [join(__dirname, '**/**.entity{.ts,.js}')],
            // autoLoadEntities: true,
            // synchronize: true,
            // useNewUrlParser: true,


            type: 'postgres',
            host: this.environmentService.getPostgresHost(),
            port: this.environmentService.getPostgresPort(),
            username: this.environmentService.getPostgresUser(),
            database: this.environmentService.getPostgresDb(),
            password: this.environmentService.getPostgresPassword(),
            entities: [join(__dirname, '**/**.entity{.ts,.js}')],
            synchronize: true,
            logging: true,
            autoLoadEntities: true,
        };
    }
}

