import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {  } from 'class-validator'
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
// class-validator
  app.useGlobalPipes(
      new ValidationPipe(),

      );

}
bootstrap();
