import { Injectable } from '@nestjs/common';
import { ClientOptions, Transport } from '@nestjs/microservices';
import { RmqConfig } from '../interfaces/rabbit-mq/rmq-config.interface';
import { EnvironmentService } from '../environment/environment.service';

@Injectable()
export class RabbitMqConfig implements RmqConfig {
    constructor(private environmentService: EnvironmentService) { }

    private _getRmqUri() {
        return this.environmentService.getRmqUri();
    }

    private _getQueue(name: string) {
        return this.environmentService.getRmqQueue(name);
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



