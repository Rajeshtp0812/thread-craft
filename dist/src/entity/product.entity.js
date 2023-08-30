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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const company_entity_1 = require("./company.entity");
let Product = exports.Product = class Product {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Product.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "date" }),
    __metadata("design:type", String)
], Product.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "details" }),
    __metadata("design:type", String)
], Product.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "rate" }),
    __metadata("design:type", String)
], Product.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "companyId" }),
    __metadata("design:type", String)
], Product.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "code" }),
    __metadata("design:type", String)
], Product.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "size", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "runNo" }),
    __metadata("design:type", String)
], Product.prototype, "runNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "billNo" }),
    __metadata("design:type", String)
], Product.prototype, "billNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "average", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "average", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "embroidary", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "embroidary", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "fittingStich", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "fittingStich", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'buttonStich', nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "buttonStich", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "print", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "print", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "pintex", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "printex", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "kMaking", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "kMaking", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "tag", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "tag", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "label", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "making", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "making", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "canvas", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "canvas", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "totalAmount", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "totalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "image", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, company => company),
    (0, typeorm_1.JoinColumn)({ name: "companyCompanyId" }),
    __metadata("design:type", company_entity_1.Company)
], Product.prototype, "company", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)({ name: "product" })
], Product);
//# sourceMappingURL=product.entity.js.map