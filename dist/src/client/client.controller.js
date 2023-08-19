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
exports.clientController = void 0;
const common_1 = require("@nestjs/common");
const client_service_1 = require("./client.service");
const update_dto_1 = require("../dtos/client/update.dto");
const create_dto_1 = require("../dtos/client/create.dto");
const swagger_1 = require("@nestjs/swagger");
let clientController = exports.clientController = class clientController {
    constructor(clientServices) {
        this.clientServices = clientServices;
    }
    async getOneClient(id) {
        return await this.clientServices.getClient(id);
    }
    async getClient(companyId) {
        return await this.clientServices.getClients(companyId);
    }
    async create(data, companyId) {
        return await this.clientServices.createClient(data, companyId);
    }
    async update(id, data) {
        return await this.clientServices.updateClient(id, data);
    }
    async delete(id) {
        await this.clientServices.deleteclient(id);
    }
};
__decorate([
    (0, common_1.Get)(':clientId'),
    __param(0, (0, common_1.Param)('clientId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], clientController.prototype, "getOneClient", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)('companyId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], clientController.prototype, "getClient", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('companyId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.createClientDto, Number]),
    __metadata("design:returntype", Promise)
], clientController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':clientId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('clientId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_dto_1.updateClientDto]),
    __metadata("design:returntype", Promise)
], clientController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':clientId'),
    __param(0, (0, common_1.Param)('clientId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], clientController.prototype, "delete", null);
exports.clientController = clientController = __decorate([
    (0, swagger_1.ApiTags)('Client'),
    (0, common_1.Controller)('client'),
    __metadata("design:paramtypes", [client_service_1.clientServices])
], clientController);
//# sourceMappingURL=client.controller.js.map