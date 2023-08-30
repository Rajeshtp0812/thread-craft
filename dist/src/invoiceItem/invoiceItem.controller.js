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
exports.invoiceItemController = void 0;
const common_1 = require("@nestjs/common");
const invoiceItem_service_1 = require("./invoiceItem.service");
const update_dto_1 = require("../dtos/invoiceItem/update.dto");
const create_dto_1 = require("../dtos/invoiceItem/create.dto");
const swagger_1 = require("@nestjs/swagger");
let invoiceItemController = exports.invoiceItemController = class invoiceItemController {
    constructor(invoiceItemServices) {
        this.invoiceItemServices = invoiceItemServices;
    }
    async getOneInvoiceItem(id) {
        return await this.invoiceItemServices.getInvoiceItem(id);
    }
    async getInvoiceItem(companyId) {
        return await this.invoiceItemServices.getInvoiceItems(companyId);
    }
    async create(data, invoiceId) {
        return await this.invoiceItemServices.createInvoiceItem(data, invoiceId);
    }
    async update(id, data) {
        return await this.invoiceItemServices.updateInvoiceItem(id, data);
    }
    async delete(id) {
        await this.invoiceItemServices.deleteInvoiceItem(id);
    }
};
__decorate([
    (0, common_1.Get)(':invoiceItemId'),
    __param(0, (0, common_1.Param)('invoiceItemId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], invoiceItemController.prototype, "getOneInvoiceItem", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)('companyId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], invoiceItemController.prototype, "getInvoiceItem", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('invoiceId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.createInvoiceItemDto, Number]),
    __metadata("design:returntype", Promise)
], invoiceItemController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':invoiceItemId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('invoiceItemId', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_dto_1.updateInvoiceItemDto]),
    __metadata("design:returntype", Promise)
], invoiceItemController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':invoiceItemId'),
    __param(0, (0, common_1.Param)('invoiceItemId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], invoiceItemController.prototype, "delete", null);
exports.invoiceItemController = invoiceItemController = __decorate([
    (0, swagger_1.ApiTags)('invoiceItem'),
    (0, common_1.Controller)('invoiceItem'),
    __metadata("design:paramtypes", [invoiceItem_service_1.invoiceItemServices])
], invoiceItemController);
//# sourceMappingURL=invoiceItem.controller.js.map