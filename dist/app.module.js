"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppModule", {
    enumerable: true,
    get: function() {
        return AppModule;
    }
});
const _appcontroller = require("./app.controller");
const _appservice = require("./app.service");
const _queezycontroller = require("./app/queezy/queezy.controller");
const _queezyservice = require("./app/queezy/queezy.service");
const _queezymodule = require("./app/queezy/queezy.module");
const _config = require("@nestjs/config");
const _prismamodule = require("./prisma/prisma.module");
const _authmodule = require("./app/auth/auth.module");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
const { Module } = require("@nestjs/common");
let AppModule = class AppModule {
};
AppModule = _ts_decorate([
    Module({
        imports: [
            _queezymodule.QueezyModule,
            _prismamodule.PrismaModule,
            _config.ConfigModule.forRoot(),
            _authmodule.AuthModule
        ],
        controllers: [
            _appcontroller.AppController,
            _queezycontroller.QueezyController
        ],
        providers: [
            _appservice.AppService,
            _queezyservice.QueezyService
        ]
    })
], AppModule);
