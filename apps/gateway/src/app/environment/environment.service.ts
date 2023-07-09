import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqEnvironment } from '../interfaces/environment/rmq.interface';


@Injectable()
export class EnvironmentService implements RmqEnvironment {
    constructor(private configService: ConfigService) { }

    getRmqUri(): string {
        return this.configService.get<string>(`RMQ_URI`);
    }

    getRmqQueue(name: string): string {
        return this.configService.get<string>(`RMQ_${name}_QUEUE`);
    }

    getAppPort(): number {
        return this.configService.get<number>(`APP_PORT`);
    }

    getGlobalPrefix(): string {
        return this.configService.get<string>(`GLOBAL_PREFIX`);
    }
}
