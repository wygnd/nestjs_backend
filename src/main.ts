import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
      .setTitle('Курс по backEnd')
      .setDescription("Документация REST API")
      .setVersion('1.0.0')
      .addTag("REST")
      .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  await app.listen(PORT, () => {
    console.log(`Server started on PORT=${PORT}`)
  });
}
bootstrap();
