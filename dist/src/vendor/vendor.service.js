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
exports.vendorServices = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vendor_entity_1 = require("../entity/vendor.entity");
const typeorm_2 = require("typeorm");
let vendorServices = exports.vendorServices = class vendorServices {
    constructor(vendor) {
        this.vendor = vendor;
    }
    async getOnevendor(id) {
        try {
            return await this.vendor.findOne({
                where: {
                    vendorId: id,
                },
            });
        }
        catch (err) {
            throw (err);
        }
    }
    async getVendors(companyId) {
        try {
            return (await this.vendor.find({ relations: ["company"] })).filter(vendor => vendor.company.companyId === companyId);
        }
        catch (err) {
            throw (err);
        }
    }
    async createvendor(data, companyId) {
        try {
            data['company'] = companyId;
            return await this.vendor.save(data);
        }
        catch (err) {
            throw (err);
        }
    }
    async updatevendor(id, data) {
        try {
            return this.vendor.update({ vendorId: id }, data);
        }
        catch (err) {
            throw (err);
        }
    }
    async deleteVendor(id) {
        try {
            return await this.vendor.delete({ vendorId: id });
        }
        catch (err) {
            throw (err);
        }
    }
};
exports.vendorServices = vendorServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vendor_entity_1.vendor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], vendorServices);
//# sourceMappingURL=vendor.service.js.map