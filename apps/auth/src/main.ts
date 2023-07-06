import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { RMQ_SERVICES } from '@libs/common';
import { RabbitMqConfig } from './app/rabbit-mq/rabbit-mq.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.setGlobalPrefix(GLOBAL_API_PREFIX)
  const rabbitMqConfig = app.get<RabbitMqConfig>(RabbitMqConfig)
  app.connectMicroservice(rabbitMqConfig.getRabbitMQOptions(RMQ_SERVICES.AUTH, false));
  // await app.startAllMicroservices()
}
bootstrap();


