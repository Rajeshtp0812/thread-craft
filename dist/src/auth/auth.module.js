"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const user_entity_1 = require("../entity/user.entity");
const jwtStrategy_strategy_1 = require("./jwtStrategy.strategy");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
let AuthModule = exports.AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('jwtSecret'),
                    signOptions: {
                        expiresIn: '1d',
                    },
                })
            }),
            passport_1.PassportModule,
        ],
        controllers: [auth_controller_1.authcontroller],
        providers: [auth_service_1.AuthService, user_service_1.userService, jwtStrategy_strategy_1.jwtStrategy, jwtStrategy_strategy_1.refreshStrategy],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map