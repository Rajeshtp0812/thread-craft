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
exports.vendorController = void 0;
const common_1 = require("@nestjs/common");
const vendor_service_1 = require("./vendor.service");
const update_dto_1 = require("../dtos/vendor/update.dto");
const create_dto_1 = require("../dtos/vendor/create.dto");
const swagger_1 = require("@nestjs/swagger");
let vendorController = exports.vendorController = class vendorController {
    constructor(vendorServices) {
        this.vendorServices = vendorServices;
    }
    async getVendor(id) {
        return await this.vendorServices.getOnevendor(id);
    }
    async getVendors(companyId) {
        return await this.vendorServices.getVendors(companyId);
    }
    async create(data, companyId) {
        return await this.vendorServices.createvendor(data, companyId);
    }
    async update(id, data) {
        return await this.vendorServices.updatevendor(id, data);
    }
    async delete(id) {
        await this.vendorServices.deleteVendor(id);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], vendorController.prototype, "getVendor", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('companyId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], vendorController.prototype, "getVendors", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('companyId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.createVendorDto, Number]),
    __metadata("design:returntype", Promise)
], vendorController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_dto_1.updateVendorDto]),
    __metadata("design:returntype", Promise)
], vendorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], vendorController.prototype, "delete", null);
exports.vendorController = vendorController = __decorate([
    (0, swagger_1.ApiTags)('Vendor'),
    (0, common_1.Controller)('vendor'),
    __metadata("design:paramtypes", [vendor_service_1.vendorServices])
], vendorController);
//# sourceMappingURL=vendor.controller.js.map