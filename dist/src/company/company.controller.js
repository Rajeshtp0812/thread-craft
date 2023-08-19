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
exports.companyController = void 0;
const common_1 = require("@nestjs/common");
const company_service_1 = require("./company.service");
const create_dto_1 = require("../dtos/company/create.dto");
const update_dto_1 = require("../dtos/company/update.dto");
const public_decorator_1 = require("../auth/public.decorator");
const swagger_1 = require("@nestjs/swagger");
let companyController = exports.companyController = class companyController {
    constructor(companyServices) {
        this.companyServices = companyServices;
    }
    async getOneComapany(id) {
        return await this.companyServices.getCompany(id);
    }
    async getCompany() {
        return await this.companyServices.getCompanies();
    }
    async create(data) {
        return await this.companyServices.createCompany(data);
    }
    async update(id, data) {
        return await this.companyServices.updateCompany(id, data);
    }
    async delete(id) {
        await this.companyServices.deleteCompany(id);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], companyController.prototype, "getOneComapany", null);
__decorate([
    (0, common_1.Get)(),
    (0, public_decorator_1.Public)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], companyController.prototype, "getCompany", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.createCompanyDto]),
    __metadata("design:returntype", Promise)
], companyController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_dto_1.updateCompanyDto]),
    __metadata("design:returntype", Promise)
], companyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], companyController.prototype, "delete", null);
exports.companyController = companyController = __decorate([
    (0, swagger_1.ApiTags)('Company'),
    (0, common_1.Controller)('company'),
    __metadata("design:paramtypes", [company_service_1.companyServices])
], companyController);
//# sourceMappingURL=company.controller.js.map