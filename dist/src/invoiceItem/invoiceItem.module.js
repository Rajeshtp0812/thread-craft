"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceItemModule = void 0;
const common_1 = require("@nestjs/common");
const invoiceItem_service_1 = require("./invoiceItem.service");
const invoiceItem_controller_1 = require("./invoiceItem.controller");
const typeorm_1 = require("@nestjs/typeorm");
const invoiceItems_1 = require("../entity/invoiceItems");
let invoiceItemModule = exports.invoiceItemModule = class invoiceItemModule {
};
exports.invoiceItemModule = invoiceItemModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([invoiceItems_1.invoiceItems])
        ],
        providers: [invoiceItem_service_1.invoiceItemServices],
        controllers: [invoiceItem_controller_1.invoiceItemController]
    })
], invoiceItemModule);
//# sourceMappingURL=invoiceItem.module.js.map