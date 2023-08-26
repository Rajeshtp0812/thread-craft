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
exports.Invoice = void 0;
const typeorm_1 = require("typeorm");
const company_entity_1 = require("./company.entity");
const invoiceItems_1 = require("./invoiceItems");
let Invoice = exports.Invoice = class Invoice extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'invoiceId' }),
    __metadata("design:type", Number)
], Invoice.prototype, "invoiceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'invoiceNo' }),
    __metadata("design:type", Number)
], Invoice.prototype, "invoiceNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'SupplyDate' }),
    __metadata("design:type", String)
], Invoice.prototype, "supplyDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'State' }),
    __metadata("design:type", String)
], Invoice.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'TransportMode' }),
    __metadata("design:type", String)
], Invoice.prototype, "transportMode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Conatact' }),
    __metadata("design:type", Number)
], Invoice.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Address' }),
    __metadata("design:type", String)
], Invoice.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'GstNo' }),
    __metadata("design:type", Number)
], Invoice.prototype, "gstNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'SupplyPlace' }),
    __metadata("design:type", String)
], Invoice.prototype, "supplyPlace", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Cgst' }),
    __metadata("design:type", String)
], Invoice.prototype, "cgst", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CgstPercentage' }),
    __metadata("design:type", String)
], Invoice.prototype, "cgstPercentage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Sgst' }),
    __metadata("design:type", String)
], Invoice.prototype, "sgst", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'SgstPercentage' }),
    __metadata("design:type", String)
], Invoice.prototype, "sgstPercentage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'TotalAmount' }),
    __metadata("design:type", Number)
], Invoice.prototype, "totalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'AmountInWords' }),
    __metadata("design:type", String)
], Invoice.prototype, "amountInWords", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CompanyId' }),
    __metadata("design:type", Number)
], Invoice.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => company_entity_1.Company, Company => Company.invoice),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", company_entity_1.Company)
], Invoice.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => invoiceItems_1.invoiceItems),
    __metadata("design:type", invoiceItems_1.invoiceItems)
], Invoice.prototype, "invoice", void 0);
exports.Invoice = Invoice = __decorate([
    (0, typeorm_1.Entity)({ name: 'invoice' })
], Invoice);
//# sourceMappingURL=invoice.entity.js.map