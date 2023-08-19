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
exports.productAllotment = void 0;
const typeorm_1 = require("typeorm");
let productAllotment = exports.productAllotment = class productAllotment extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], productAllotment.prototype, "productAllotmentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "Date", nullable: true }),
    __metadata("design:type", String)
], productAllotment.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "vendorId" }),
    __metadata("design:type", Number)
], productAllotment.prototype, "vendorId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "companyId" }),
    __metadata("design:type", Number)
], productAllotment.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "Size", nullable: true }),
    __metadata("design:type", String)
], productAllotment.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "ProductQuantity", nullable: true }),
    __metadata("design:type", Number)
], productAllotment.prototype, "productQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "VendorRate", nullable: true }),
    __metadata("design:type", Number)
], productAllotment.prototype, "vendorRate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "DeliveryDate", nullable: true }),
    __metadata("design:type", String)
], productAllotment.prototype, "deliveryDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "Amount", nullable: true }),
    __metadata("design:type", Number)
], productAllotment.prototype, "totalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "AdvancePayment", nullable: true }),
    __metadata("design:type", Number)
], productAllotment.prototype, "advancePayment", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "balanceAmmount", nullable: true }),
    __metadata("design:type", Number)
], productAllotment.prototype, "balanceAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "Description", nullable: true }),
    __metadata("design:type", String)
], productAllotment.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "image", nullable: true }),
    __metadata("design:type", String)
], productAllotment.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "productId" }),
    __metadata("design:type", Number)
], productAllotment.prototype, "productId", void 0);
exports.productAllotment = productAllotment = __decorate([
    (0, typeorm_1.Entity)({ name: "productallotment" })
], productAllotment);
//# sourceMappingURL=productAllotment.entity.js.map