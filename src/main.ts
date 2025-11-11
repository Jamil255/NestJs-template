/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { HttpException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import dotenv from 'dotenv';
interface FormattedErrors {
  [key: string]: string;
}


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  dotenv.config();
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        /* Initialize formattedErrors with the correct type */
        const formattedErrors: FormattedErrors = {};

        errors.forEach((error) => {
          /* Ensure error.property is of type string or handle it accordingly */
          const property: string = error.property;
          const constraints = Object.values(error.constraints ?? {});
          formattedErrors[property] = constraints[constraints.length - 1];
        });

        return new HttpException(
          {
            message: 'Please fix the following errors.',
            errors: formattedErrors,
          },
          422,
        );
      },
      whitelist: true /* Remove properties not defined in the DTO */,
      transform: true /* Automatically transform payload to DTO instance */,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  const options = new DocumentBuilder()
    .setTitle('Template API')
    .setDescription('The Template API description')
    .setVersion('1.0')
    .addTag('template')
    .addBearerAuth()
    .addServer('api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docx', app, document);

  app.setGlobalPrefix('api');
  app.enableShutdownHooks();
  await app.listen(process.env.PORT || 3000);

  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap().catch((err) => {
  console.error('Error starting the main service:', err);
});
