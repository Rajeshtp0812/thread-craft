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
exports.productAllotmentController = void 0;
const common_1 = require("@nestjs/common");
const productAllotment_service_1 = require("./productAllotment.service");
const create_dto_1 = require("../dtos/productAllotment/create.dto");
const public_decorator_1 = require("../auth/public.decorator");
const swagger_1 = require("@nestjs/swagger");
let productAllotmentController = exports.productAllotmentController = class productAllotmentController {
    constructor(productAllotmentServices) {
        this.productAllotmentServices = productAllotmentServices;
    }
    async getOneAllotedProduct(id) {
        return await this.productAllotmentServices.getAllotedProduct(id);
    }
    async getproductAllotment() {
        return await this.productAllotmentServices.getAllotedProducts();
    }
    async create(data) {
        return await this.productAllotmentServices.createAllotedProduct(data);
    }
    async update(id, data) {
        return await this.productAllotmentServices.updateAllotedProduct(id, data);
    }
    async delete(id) {
        return await this.productAllotmentServices.deleteAllotedProduct(id);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], productAllotmentController.prototype, "getOneAllotedProduct", null);
__decorate([
    (0, common_1.Get)(),
    (0, public_decorator_1.Public)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], productAllotmentController.prototype, "getproductAllotment", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.createProductAllotmentDto]),
    __metadata("design:returntype", Promise)
], productAllotmentController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], productAllotmentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], productAllotmentController.prototype, "delete", null);
exports.productAllotmentController = productAllotmentController = __decorate([
    (0, swagger_1.ApiTags)('Product Allotment'),
    (0, common_1.Controller)('productAllotment'),
    __metadata("design:paramtypes", [productAllotment_service_1.productAllotmentServices])
], productAllotmentController);
//# sourceMappingURL=productAllotment.controller.js.map