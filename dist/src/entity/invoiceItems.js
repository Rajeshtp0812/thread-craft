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
exports.invoiceItems = void 0;
const typeorm_1 = require("typeorm");
const invoice_entity_1 = require("./invoice.entity");
let invoiceItems = exports.invoiceItems = class invoiceItems extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], invoiceItems.prototype, "invoiceItemId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'code' }),
    __metadata("design:type", String)
], invoiceItems.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description' }),
    __metadata("design:type", String)
], invoiceItems.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hasCode' }),
    __metadata("design:type", String)
], invoiceItems.prototype, "hasCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Rate' }),
    __metadata("design:type", Number)
], invoiceItems.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Quantity' }),
    __metadata("design:type", Number)
], invoiceItems.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Amount' }),
    __metadata("design:type", Number)
], invoiceItems.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'InvoiceId' }),
    __metadata("design:type", Number)
], invoiceItems.prototype, "invoiceId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => invoice_entity_1.Invoice),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", invoice_entity_1.Invoice)
], invoiceItems.prototype, "invoice", void 0);
exports.invoiceItems = invoiceItems = __decorate([
    (0, typeorm_1.Entity)({ name: "invoiceItem" })
], invoiceItems);
//# sourceMappingURL=invoiceItems.js.map