"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = exports.dataSourceOptions = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const configService = new config_1.ConfigService();
exports.dataSourceOptions = {
    type: 'mysql',
    username: configService.get("user"),
    password: configService.get('password'),
    host: configService.get('host'),
    port: configService.get('dbPort'),
    database: configService.get('database'),
    migrations: ['migration/**'],
    entities: ['dist/**/*.entity.js'],
};
exports.dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
//# sourceMappingURL=db-source.js.map