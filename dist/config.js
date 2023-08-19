"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const config = () => ({
    type: process.env.TYPE,
    password: process.env.PASSWORD,
    user: process.env.DB_USER,
    host: process.env.HOST,
    dbPort: process.env.DB_PORT,
    database: process.env.DB_NAME,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET
});
exports.config = config;
//# sourceMappingURL=config.js.map