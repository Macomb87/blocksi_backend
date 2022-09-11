import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {Logger} from 'nestjs-pino';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {bufferLogs: true, cors: true});
    app.useLogger(app.get(Logger));

    const config = new DocumentBuilder()
        .setTitle('Blocksi test')
        .setDescription('The API description')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}

bootstrap();
