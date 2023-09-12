import {NestFactory} from '@nestjs/core'
import { AppModule } from './app.module';
const  port = 4000 
const date = new Date().toLocaleString()




async function bootstrap() {
const app = await NestFactory.create(AppModule, {abortOnError: false})
await app.listen(port)
return {
    Porta: console.log(`Servidor rodando na porta ${port}`),
    Data: console.log(`Data:${date}`)

    
}
}
bootstrap()