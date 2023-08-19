"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productAllotmentModule = void 0;
const common_1 = require("@nestjs/common");
const productAllotment_service_1 = require("./productAllotment.service");
const productAllotment_controller_1 = require("./productAllotment.controller");
const typeorm_1 = require("@nestjs/typeorm");
const productAllotment_entity_1 = require("../entity/productAllotment.entity");
let productAllotmentModule = exports.productAllotmentModule = class productAllotmentModule {
};
exports.productAllotmentModule = productAllotmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([productAllotment_entity_1.productAllotment])
        ],
        providers: [productAllotment_service_1.productAllotmentServices],
        controllers: [productAllotment_controller_1.productAllotmentController]
    })
], productAllotmentModule);
//# sourceMappingURL=productAllotment.module.js.map