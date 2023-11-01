"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _common = require("@nestjs/common");
const _swagger = require("@nestjs/swagger");
const port = process.env.SERVERPORT;
const date = new Date().toLocaleString();
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule, {
        abortOnError: false,
        cors: {
            origin: 'http://localhost:4200',
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
        }
    });
    const config = new _swagger.DocumentBuilder().setTitle('Queezy').setDescription('Endpoints do QUEEZY ').setVersion('1.0')// .addTag('Quezzy')
    .build();
    const document = _swagger.SwaggerModule.createDocument(app, config);
    _swagger.SwaggerModule.setup('api', app, document);
    await app.listen(port);
    return {
        Port: _common.Logger.log(`Server running on the port ${port}`),
        Date: _common.Logger.log(`Date: ${date}`)
    };
}
bootstrap();
