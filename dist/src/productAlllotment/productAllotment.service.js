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
exports.productAllotmentServices = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const productAllotment_entity_1 = require("../entity/productAllotment.entity");
const typeorm_2 = require("typeorm");
let productAllotmentServices = exports.productAllotmentServices = class productAllotmentServices {
    constructor(productAllotment) {
        this.productAllotment = productAllotment;
    }
    async getAllotedProduct(id) {
        try {
            return await this.productAllotment.findOne({
                where: {
                    productAllotmentId: id,
                },
            });
        }
        catch (err) {
            throw (err);
        }
    }
    async getAllotedProducts() {
        try {
            return await this.productAllotment.find();
        }
        catch (err) {
            throw (err);
        }
    }
    async createAllotedProduct(data) {
        try {
            return await this.productAllotment.save(data);
        }
        catch (err) {
            throw (err);
        }
    }
    async updateAllotedProduct(id, data) {
        try {
            return await this.productAllotment.update({ productAllotmentId: id }, data);
        }
        catch (err) {
            throw (err);
        }
    }
    async deleteAllotedProduct(id) {
        return await this.productAllotment.delete({ productAllotmentId: id });
    }
};
exports.productAllotmentServices = productAllotmentServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(productAllotment_entity_1.productAllotment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], productAllotmentServices);
//# sourceMappingURL=productAllotment.service.js.map