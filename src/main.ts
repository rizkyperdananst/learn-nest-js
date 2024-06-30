import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ // Gunakan pipes secara global untuk mengaktifkan salah satu pipe yg saya ingin gunakan adalah validation pipe dengan begitu semua end point akan di berikan validasi dari request data yg salah.
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
