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
exports.invoiceItemServices = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const invoiceItems_1 = require("../entity/invoiceItems");
const typeorm_2 = require("typeorm");
let invoiceItemServices = exports.invoiceItemServices = class invoiceItemServices {
    constructor(invoiceItem) {
        this.invoiceItem = invoiceItem;
    }
    async getInvoiceItem(id) {
        try {
            return await this.invoiceItem.findOne({
                where: {
                    invoiceItemId: id,
                }, relations: ["invoice"]
            });
        }
        catch (err) {
            throw (err);
        }
    }
    async getInvoiceItems(invoiceId) {
        try {
            return (await this.invoiceItem.find({ relations: ["invoice"] })).filter(invoiceItem => invoiceItem.invoice.invoiceId === invoiceId);
        }
        catch (err) {
            throw (err);
        }
    }
    async createInvoiceItem(data, invoiceId) {
        try {
            data['invoice'] = invoiceId;
            return await this.invoiceItem.save(data);
        }
        catch (err) {
            throw (err);
        }
    }
    async updateInvoiceItem(id, data) {
        try {
            return this.invoiceItem.update({ invoiceItemId: id }, data);
        }
        catch (err) {
            throw (err);
        }
    }
    async deleteInvoiceItem(id) {
        try {
            return await this.invoiceItem.delete({ invoiceItemId: id });
        }
        catch (err) {
            throw (err);
        }
    }
};
exports.invoiceItemServices = invoiceItemServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(invoiceItems_1.invoiceItems)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], invoiceItemServices);
//# sourceMappingURL=invoiceItem.service.js.map