import { Module, Global } from '@nestjs/common';
import { EnvironmentService } from './environment.service';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './environment.validate'
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'libs/common/env/local.env',
      validationSchema,

    })
  ],
  providers: [EnvironmentService],
  exports: [EnvironmentService]
})
export class EnvironmentModule { }
