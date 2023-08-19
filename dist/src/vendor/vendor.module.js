"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorModule = void 0;
const common_1 = require("@nestjs/common");
const vendor_service_1 = require("./vendor.service");
const vendor_controller_1 = require("./vendor.controller");
const typeorm_1 = require("@nestjs/typeorm");
const vendor_entity_1 = require("../entity/vendor.entity");
let vendorModule = exports.vendorModule = class vendorModule {
};
exports.vendorModule = vendorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([vendor_entity_1.vendor])
        ],
        providers: [vendor_service_1.vendorServices],
        controllers: [vendor_controller_1.vendorController]
    })
], vendorModule);
//# sourceMappingURL=vendor.module.js.map