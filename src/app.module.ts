import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { QueezyController } from './app/queezy/queezy.controller';
import { QueezyService } from './app/queezy/queezy.service';
import { QueezyModule } from './app/queezy/queezy.module';

const { Module } = require("@nestjs/common");
console.log('chamou o modulooo')
@Module({
    imports: [
        QueezyModule
    ],
    controllers: [
        AppController,
        QueezyController,
    ],
    providers: [
        AppService,
        QueezyService
    ]
})
export class AppModule {}