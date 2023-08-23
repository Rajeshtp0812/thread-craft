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
exports.invoiceServices = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const invoice_entity_1 = require("../entity/invoice.entity");
const typeorm_2 = require("typeorm");
let invoiceServices = exports.invoiceServices = class invoiceServices {
    constructor(invoice) {
        this.invoice = invoice;
    }
    async getInvoice(id) {
        return await this.invoice.findOne({
            where: {
                invoiceId: id,
            },
            relations: ['company'],
        });
    }
    async getInvoices() {
        try {
            return await this.invoice.find();
        }
        catch (err) {
            throw (err);
        }
    }
    async createInvoice(data) {
        try {
            if (!data) {
                throw new common_1.HttpException('not found', 400);
            }
            console.log(data);
            return await this.invoice.save(data);
        }
        catch (err) {
            throw (err);
        }
    }
    async updateInvoice(id, data) {
        try {
            return await this.invoice.update({ invoiceId: id }, data);
        }
        catch (err) {
            throw (err);
        }
    }
    async deleteInvoice(id) {
        try {
            return await this.invoice.delete({ invoiceId: id });
        }
        catch (err) {
            throw (err);
        }
    }
};
exports.invoiceServices = invoiceServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(invoice_entity_1.Invoice)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], invoiceServices);
//# sourceMappingURL=invoice.service.js.map