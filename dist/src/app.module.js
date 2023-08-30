"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const user_entity_1 = require("./entity/user.entity");
const user_module_1 = require("./user/user.module");
const config_1 = require("@nestjs/config");
const config_2 = require("../config");
const company_entity_1 = require("./entity/company.entity");
const company_module_1 = require("./company/company.module");
const client_module_1 = require("./client/client.module");
const client_entity_1 = require("./entity/client.entity");
const vendor_module_1 = require("./vendor/vendor.module");
const vendor_entity_1 = require("./entity/vendor.entity");
const product_module_1 = require("./product/product.module");
const productAllotment_entity_1 = require("./entity/productAllotment.entity");
const productAllotment_module_1 = require("./productAlllotment/productAllotment.module");
const invoice_module_1 = require("./invoice/invoice.module");
const invoice_entity_1 = require("./entity/invoice.entity");
const invoiceItems_1 = require("./entity/invoiceItems");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [config_2.config],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    type: 'mysql',
                    username: configService.get("user"),
                    password: configService.get('password'),
                    host: configService.get('host'),
                    port: configService.get('dbPort'),
                    database: configService.get('database'),
                    autoLoadEntities: true,
                    synchronize: true,
                    entities: [user_entity_1.User, company_entity_1.Company, client_entity_1.Client, vendor_entity_1.vendor, productAllotment_entity_1.productAllotment, invoice_entity_1.Invoice, invoiceItems_1.invoiceItems],
                    schemas: ["default", "invoiceItems"],
                }),
            }),
            company_module_1.companyModule,
            auth_module_1.AuthModule,
            user_module_1.userModule,
            client_module_1.clientModule,
            vendor_module_1.vendorModule,
            product_module_1.productModule,
            productAllotment_module_1.productAllotmentModule,
            invoice_module_1.invoiceModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map