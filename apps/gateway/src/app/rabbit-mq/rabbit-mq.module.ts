import { Module } from '@nestjs/common';
import { RMQ_SERVICES } from '@libs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { RabbitMqConfig } from './rabbit-mq.config';
import { EnvironmentModule } from '../environment/environment.module';

@Module({
    imports: [EnvironmentModule],
    providers: [
        RabbitMqConfig,
        {
            provide: RMQ_SERVICES.AUTH,
            useFactory: (rabbitMqConfig: RabbitMqConfig) => {
                const rabbitMQOptions = rabbitMqConfig.getRabbitMQOptions(RMQ_SERVICES.AUTH);
                return ClientProxyFactory.create(rabbitMQOptions);
            },
            inject: [RabbitMqConfig],
        }
    ],
    exports: [RMQ_SERVICES.AUTH]
})
export class RabbitmqModule { }
