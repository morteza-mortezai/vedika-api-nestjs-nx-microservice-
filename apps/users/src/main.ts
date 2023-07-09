import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { RMQ_SERVICES } from '@libs/common';
import { RabbitMqConfig } from './app/rabbit-mq/rabbit-mq.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const rabbitMqConfig = app.get<RabbitMqConfig>(RabbitMqConfig)
  app.connectMicroservice(rabbitMqConfig.getRabbitMQOptions(RMQ_SERVICES.USERS, true));
  await app.startAllMicroservices()
}
bootstrap();


