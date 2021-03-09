import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const configService = app.get(ConfigService)

    app.useGlobalPipes(new ValidationPipe())

    const config = new DocumentBuilder()
        .setTitle('Nest products')
        .setDescription('The products API description')
        .setVersion('1.0')
        .addTag('products')
        .addTag('orders')
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)

    const port = configService.get('port')
    await app.listen(port)
}

bootstrap()
