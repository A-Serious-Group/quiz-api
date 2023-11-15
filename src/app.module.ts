import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { QueezyController } from './app/queezy/queezy.controller';
import { QueezyService } from './app/queezy/queezy.service';
import { QueezyModule } from './app/queezy/queezy.module';

const { Module } = require("@nestjs/common");
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from "./prisma/prisma.module";
import { AuthModule } from './app/auth/auth.module';
import { HttpExceptionFilter } from "./app/exception-filter/exception-filter";
import { APP_FILTER } from "@nestjs/core";
@Module({
    imports: [
        QueezyModule,
        PrismaModule,
        ConfigModule.forRoot(),
        AuthModule,
    ],
    controllers: [
        AppController,
        QueezyController,
    ],
    providers: [
        AppService,
        QueezyService,
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter
        }
    ]
})
export class AppModule {}