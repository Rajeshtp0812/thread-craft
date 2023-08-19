"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyModule = void 0;
const common_1 = require("@nestjs/common");
const company_service_1 = require("./company.service");
const company_controller_1 = require("./company.controller");
const typeorm_1 = require("@nestjs/typeorm");
const company_entity_1 = require("../entity/company.entity");
let companyModule = exports.companyModule = class companyModule {
};
exports.companyModule = companyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([company_entity_1.Company])
        ],
        providers: [company_service_1.companyServices],
        controllers: [company_controller_1.companyController]
    })
], companyModule);
//# sourceMappingURL=company.module.js.map