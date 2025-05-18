import {NestFactory} from '@nestjs/core'
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const  port = process.env.SERVERPORT 
const date = new Date().toLocaleString()




async function bootstrap() {
const app = await NestFactory.create(AppModule, {
    abortOnError: false, 
    cors: {
        origin: process.env.QUEEZY_URL_FRONT,
        credentials: true
    },
})
const config = new DocumentBuilder()
.setTitle('Queezy')
.setDescription('Endpoints do QUEEZY ')
.setVersion('1.0')
// .addTag('Quezzy')
.build()

const document = SwaggerModule.createDocument(app, config)
SwaggerModule.setup('api', app, document)

app.useGlobalPipes(new ValidationPipe(
{
    transform: true,
}
),
)

await app.listen(port)
return {
    
    Port: Logger.log(`Server running on the port ${port}`),
    Date: Logger.log(`Date: ${date}`)

    
}
}
bootstrap()