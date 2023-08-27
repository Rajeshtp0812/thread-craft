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
exports.productController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const update_dto_1 = require("../dtos/product/update.dto");
const create_dto_1 = require("../dtos/product/create.dto");
const platform_express_1 = require("@nestjs/platform-express");
const storage_config_1 = require("./storage.config");
const swagger_1 = require("@nestjs/swagger");
let productController = exports.productController = class productController {
    constructor(productServices) {
        this.productServices = productServices;
    }
    async getProduct(id) {
        return await this.productServices.getProduct(id);
    }
    async getProducts(companyId) {
        return await this.productServices.getProducts(companyId);
    }
    async update(file, id, data) {
        return await this.productServices.updateProduct(id, data, file);
    }
    async delete(id, imageUrl) {
        return this.productServices.deleteProduct(id, imageUrl);
    }
    async createProduct(file, data, companyId) {
        return await this.productServices.createProduct(file, { ...data, companyId });
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], productController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('companyId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], productController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image", { storage: storage_config_1.storage })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, update_dto_1.updateProductDto]),
    __metadata("design:returntype", Promise)
], productController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], productController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image", { storage: storage_config_1.storage })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('companyId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_dto_1.createProductDto, Number]),
    __metadata("design:returntype", Promise)
], productController.prototype, "createProduct", null);
exports.productController = productController = __decorate([
    (0, swagger_1.ApiTags)('product'),
    (0, common_1.Controller)("product"),
    __metadata("design:paramtypes", [product_service_1.productServices])
], productController);
//# sourceMappingURL=product.controller.js.map