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
exports.Client = void 0;
const typeorm_1 = require("typeorm");
const company_entity_1 = require("./company.entity");
let Client = exports.Client = class Client extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Client.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "company" }),
    __metadata("design:type", String)
], Client.prototype, "companyName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "gst" }),
    __metadata("design:type", String)
], Client.prototype, "gst", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: "address" }),
    __metadata("design:type", String)
], Client.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: "email" }),
    __metadata("design:type", String)
], Client.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "pinCode" }),
    __metadata("design:type", String)
], Client.prototype, "pinCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "state" }),
    __metadata("design:type", String)
], Client.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "city" }),
    __metadata("design:type", String)
], Client.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "companyId" }),
    __metadata("design:type", Number)
], Client.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, company => company.clients),
    (0, typeorm_1.JoinColumn)({ name: "companyCompanyId" }),
    __metadata("design:type", company_entity_1.Company)
], Client.prototype, "company", void 0);
exports.Client = Client = __decorate([
    (0, typeorm_1.Entity)({ name: 'client' })
], Client);
//# sourceMappingURL=client.entity.js.map