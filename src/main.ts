import {NestFactory} from '@nestjs/core'
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common'
const  port = process.env.SERVERPORT 
const date = new Date().toLocaleString()




async function bootstrap() {
const app = await NestFactory.create(AppModule, {
    abortOnError: false, 
    cors: {
        origin: 'http://localhost:4200',
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
    },
})
await app.listen(port)
return {
    
    Port: Logger.log(`Server running on the port ${port}`),
    Date: Logger.log(`Date: ${date}`)

    
}
}
bootstrap()