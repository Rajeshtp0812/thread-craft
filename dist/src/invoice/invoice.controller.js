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
exports.invoiceController = void 0;
const common_1 = require("@nestjs/common");
const invoice_service_1 = require("./invoice.service");
const create_dto_1 = require("../dtos/invoice/create.dto");
const update_dto_1 = require("../dtos/invoice/update.dto");
const swagger_1 = require("@nestjs/swagger");
let invoiceController = exports.invoiceController = class invoiceController {
    constructor(invoiceServices) {
        this.invoiceServices = invoiceServices;
    }
    async getInvoice(id) {
        return await this.invoiceServices.getInvoice(id);
    }
    async create(data, companyId) {
        return await this.invoiceServices.createInvoice({ ...data, companyId });
    }
    async update(id, data) {
        return await this.invoiceServices.updateInvoice(id, data);
    }
    async delete(id) {
        await this.invoiceServices.deleteInvoice(id);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], invoiceController.prototype, "getInvoice", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('companyId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.createInvoiceDto, Number]),
    __metadata("design:returntype", Promise)
], invoiceController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_dto_1.updateInvoiceDto]),
    __metadata("design:returntype", Promise)
], invoiceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], invoiceController.prototype, "delete", null);
exports.invoiceController = invoiceController = __decorate([
    (0, swagger_1.ApiTags)('invoice'),
    (0, common_1.Controller)('invoice'),
    __metadata("design:paramtypes", [invoice_service_1.invoiceServices])
], invoiceController);
//# sourceMappingURL=invoice.controller.js.map