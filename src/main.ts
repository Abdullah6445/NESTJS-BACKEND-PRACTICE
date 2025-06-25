import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
  });
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('CHI Attandance Management')
    .setDescription('Chi Attandance Management Testing')
    .setVersion('0.1')
    .build();
    

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
