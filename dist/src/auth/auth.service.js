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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
let AuthService = exports.AuthService = class AuthService {
    constructor(user, jwt) {
        this.user = user;
        this.jwt = jwt;
    }
    async create(user) {
        const newUser = await this.user.createUser(user);
        const payload = {
            id: newUser.id,
            username: newUser.username,
        };
        const { accessToken, refreshToken } = await this.generateToken(payload);
        await this.updateRefreshToken(newUser.id, refreshToken);
        return {
            accessToken,
            refreshToken,
        };
    }
    async login(loginData) {
        const { username, password } = loginData;
        const isUser = await this.user.findUser(username);
        if (!isUser) {
            throw new common_1.NotFoundException('user not found');
        }
        const isValidPassword = password == isUser.password;
        if (!isValidPassword) {
            throw new common_1.HttpException('user or password not matched', 404);
        }
        const { accessToken, refreshToken } = await this.generateToken({
            id: isUser.id,
            username: isUser.username,
        });
        await this.updateRefreshToken(isUser.id, refreshToken);
        return {
            accessToken,
            refreshToken,
        };
    }
    async refresh(id) {
        try {
            const [isUser] = await this.user.findById(id);
            const { accessToken, refreshToken } = await this.generateToken({
                id: id,
                username: isUser.username,
            });
            await this.updateRefreshToken(isUser.id, refreshToken);
            return {
                accessToken,
                refreshToken,
            };
        }
        catch (err) {
            throw err;
        }
    }
    async generateToken(payload) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwt.signAsync(payload, { expiresIn: '1d' }),
            await this.jwt.signAsync(payload, { expiresIn: '2m', secret: 'hdfc' }),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
    async updateRefreshToken(id, refreshToken) {
        try {
            await this.user.updateUser(id, { refreshToken });
        }
        catch (err) {
            throw err;
        }
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.userService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map