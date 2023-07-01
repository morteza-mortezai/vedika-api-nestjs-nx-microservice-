import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqConfig } from '../interfaces/rmq.interface';
import { AppConfig } from '../interfaces/app.interface';
import { DatabaseConfig } from '../interfaces/database.interface';
import { ClientOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class EnvironmentService implements RmqConfig, AppConfig, DatabaseConfig {
    constructor(private configService: ConfigService) { }

    private _getRmqUri() {
        return this.configService.get<string>('RMQ_URI');
    }

    private _getQueue(name: string) {
        return this.configService.get<string>(`RMQ_${name}_QUEUE`);
    }

    getAppPort() {
        return this.configService.get<number>('APP_PORT') as number;
    }

    getHttpTimeout() {
        return this.configService.get<number>('HTTP_TIMEOUT') as number;
    }

    getHttpMaxRedirects() {
        return this.configService.get<number>('HTTP_MAX_REDIRECTS') as number;
    }

    getPostgresHost() {
        return this.configService.get<string>('POSTGRES_HOST') as string;
    }

    getPostgresPort() {
        return this.configService.get<number>('POSTGRES_PORT') as number;
    }

    getPostgresUser() {
        return this.configService.get<string>('POSTGRES_USER') as string;
    }

    getPostgresPassword() {
        return this.configService.get<string>('POSTGRES_PASSWORD') as string;
    }

    getPostgresDb() {
        return this.configService.get<string>('POSTGRES_DB') as string;
    }

    getRabbitMQOptions(name: string, noAck = false): ClientOptions {
        const clientOptions: ClientOptions = {
            transport: Transport.RMQ,
            options: {
                urls: [this._getRmqUri()],
                queue: this._getQueue(name),
                persistent: true,
                noAck
            }
        }
        return clientOptions
    }

}
