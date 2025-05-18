import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { QueezyController } from './app/queezy/queezy.controller';
import { QueezyService } from './app/queezy/queezy.service';
import { QueezyModule } from './app/queezy/queezy.module';

const { Module } = require("@nestjs/common");
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from "./prisma/prisma.module";
import { AuthModule } from './app/auth/auth.module';
import { CloudinaryService } from "./app/upload/cloudinary.service";
import { UploadModule } from "./app/upload/upload.module";
@Module({
    imports: [
        QueezyModule,
        PrismaModule,
        ConfigModule.forRoot(),
        AuthModule,
        UploadModule,
    ],
    controllers: [
        AppController,
        QueezyController,
    ],
    providers: [
        AppService,
        QueezyService,
    ]
})
export class AppModule {}