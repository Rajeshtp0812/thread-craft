"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("./auth/jwtAuth.guard");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const response_format_middleware_1 = require("./middlewares/response-format.middleware");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    const reflector = app.get(core_1.Reflector);
    app.useGlobalGuards(new jwtAuth_guard_1.jwtAuth(reflector));
    app.useGlobalInterceptors(new response_format_middleware_1.ResponseFormatInterceptor());
    const configService = app.get(config_1.ConfigService);
    app.useStaticAssets((0, path_1.join)(__dirname + '/src/uploads'));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Thread Craft')
        .setDescription('')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use('/api', (req, res, next) => {
        const authHeader = req.header('Authorization');
        if (!authHeader || !authHeader.startsWith('Basic ')) {
            return res.status(401).send('Unauthorized');
        }
        const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString();
        const [username, password] = credentials.split(':');
        if (username === 'YOUR_USERNAME' && password === 'YOUR_PASSWORD') {
            next();
        }
        else {
            return res.status(401).send('Unauthorized');
        }
    });
    const port = configService.get('port');
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map