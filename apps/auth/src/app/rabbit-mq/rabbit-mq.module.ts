import { Module } from '@nestjs/common';
import { RMQ_SERVICES } from '@libs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { RabbitMqConfig } from './rabbit-mq.config';
import { EnvironmentModule } from '../environment/environment.module';
import { RabbitmqService } from './rabbit-mq.service';

@Module({
    imports: [EnvironmentModule],
    providers: [
        RabbitmqService,
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
    exports: [RMQ_SERVICES.AUTH, RabbitmqService]
})
export class RabbitmqModule { }
