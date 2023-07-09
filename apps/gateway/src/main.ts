
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvironmentService } from './app/environment/environment.service';
import { GlobalExceptionFilter } from '@libs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const environmentService = app.get<EnvironmentService>(EnvironmentService)
  const globalPrefix = environmentService.getGlobalPrefix();
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.setGlobalPrefix(globalPrefix);
  const port = environmentService.getAppPort()
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
