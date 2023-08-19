"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authcontroller = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const user_dto_1 = require("../dtos/user/user.dto");
const login_dto_1 = require("../dtos/user/login.dto");
const public_decorator_1 = require("./public.decorator");
const jwtAuth_guard_1 = require("./jwtAuth.guard");
const swagger_1 = require("@nestjs/swagger");
let authcontroller = exports.authcontroller = class authcontroller {
    constructor(authServices) {
        this.authServices = authServices;
    }
    async register(user) {
        return await this.authServices.create(user);
    }
    async Login(loginDto) {
        return this.authServices.login(loginDto);
    }
    async refreshLogin(req) {
        return await this.authServices.refresh(req.user.id);
    }
};
__decorate([
    (0, common_1.Post)('register'),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.userDto]),
    __metadata("design:returntype", Promise)
], authcontroller.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.loginDto]),
    __metadata("design:returntype", Promise)
], authcontroller.prototype, "Login", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, public_decorator_1.Public)(),
    (0, common_1.UseGuards)(new jwtAuth_guard_1.refreshAuth("jwt-refresh")),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], authcontroller.prototype, "refreshLogin", null);
exports.authcontroller = authcontroller = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], authcontroller);
//# sourceMappingURL=auth.controller.js.map